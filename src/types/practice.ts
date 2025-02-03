import { type ReactElement } from 'react';

export interface ReviewQuestion {
  id: string;
  testName: string;
  section: string;
  questionNumber: number;
  question: string;
  answer: string;
  explanation: string;
  savedAt: string;
}

export interface Flashcard {
  question: string;
  options: string[];
  correctAnswer: string;
  answer: string;
  topic: string;
  difficulty: string;
}

export interface Topic {
  name: string;
  flashcards?: boolean;
  info?: {
    title: string;
    content: Array<{
      heading?: string;
      text: string;
      items?: string[];
    }>;
  };
}

export interface SkillCard {
  title: string;
  icon: React.ElementType;
  description: string;
  duration: string;
  questions: number;
  color: string;
  topics: Topic[];
}