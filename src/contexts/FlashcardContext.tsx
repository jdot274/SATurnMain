import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Flashcard } from '../types/flashcard';
import { loadFlashcards } from '../services/flashcardService';
import { mockFlashcards } from '../services/flashcardService';

interface FlashcardContextType {
  flashcards: Flashcard[];
  loading: boolean;
  error: string | null;
  filterBySection: (section: 'Math' | 'Reading & Writing') => Flashcard[];
  filterByTopic: (topic: string) => Flashcard[];
  filterByDifficulty: (difficulty: 'Easy' | 'Medium' | 'Hard') => Flashcard[];
}

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export function FlashcardProvider({ children }: { children: ReactNode }) {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(mockFlashcards);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadFlashcards()
      .then(cards => {
        setFlashcards(cards);
      })
      .catch(err => {
        setError('Failed to load flashcards');
        console.error('Error loading flashcards:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filterBySection = (section: 'Math' | 'Reading & Writing') => {
    return flashcards.filter(card => card.section === section);
  };

  const filterByTopic = (topic: string) => {
    return flashcards.filter(card => card.topic === topic);
  };

  const filterByDifficulty = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    return flashcards.filter(card => card.difficulty === difficulty);
  };

  return (
    <FlashcardContext.Provider value={{
      flashcards,
      loading,
      error,
      filterBySection,
      filterByTopic,
      filterByDifficulty
    }}>
      {children}
    </FlashcardContext.Provider>
  );
}

export function useFlashcards() {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error('useFlashcards must be used within a FlashcardProvider');
  }
  return context;
}