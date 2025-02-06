export interface Flashcard {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  section: 'Math' | 'Reading & Writing';
  explanation: string;
}

export interface FlashcardFilters {
  section?: 'Math' | 'Reading & Writing';
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}