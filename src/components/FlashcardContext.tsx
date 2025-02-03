import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Flashcard } from '../types/flashcard';
import { loadFlashcards } from '../services/flashcardService';

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
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadFlashcards()
      .then(cards => {
        setFlashcards(cards);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load flashcards');
        setLoading(fals