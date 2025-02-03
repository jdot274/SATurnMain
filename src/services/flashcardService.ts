import { Flashcard } from '../types/flashcard';

// Mock data - in a real app this would fetch from an API
export const mockFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "A car manufacturer produces x cars per day. After upgrading their equipment, daily production increased by 25%. Which equation represents the new daily production?",
    options: ["0.25x", "1.25x", "2.5x", "x + 25"],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Algebra",
    section: "Math",
    explanation: "The new production quantity represents 100% of the original amount plus a 25% increase. This means we need 125% of the original amount. We can write this as a decimal by dividing 125 by 100, giving us 1.25. Therefore, the new daily production is 1.25x cars."
  },
  {
    id: 2,
    question: "The concept of time has puzzled philosophers and scientists for millennia. While we experience time as a continuous flow from past to future, modern physics suggests a more complex reality. What is the main purpose of this passage?",
    options: [
      "Present a historical overview of time measurement",
      "Explain modern physics' view of time",
      "Compare different theories of time",
      "Critique Einstein's theory of relativity"
    ],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Reading Comprehension",
    section: "Reading & Writing",
    explanation: "The passage introduces the traditional view of time and contrasts it with modern physics' perspective, focusing on explaining how our understanding of time has evolved through scientific discovery."
  },
  {
    id: 3,
    question: "If f(x) = 2x² - 3x + 1, what is f(-2)?",
    options: ["3", "11", "13", "15"],
    correctAnswer: 3,
    difficulty: "Hard",
    topic: "Advanced Mathematics",
    section: "Math",
    explanation: "To find f(-2), substitute x = -2 into the function:\nf(-2) = 2(-2)² - 3(-2) + 1\n= 2(4) + 6 + 1\n= 8 + 6 + 1\n= 15"
  },
  {
    id: 4,
    question: "Choose the word or phrase that best maintains the tone and meaning of the sentence: The scientist's groundbreaking discovery was _____ by her peers.",
    options: ["dissed", "acknowledged", "recognized", "noted"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Writing Style",
    section: "Reading & Writing",
    explanation: "In formal academic writing, 'recognized' maintains the professional tone while conveying the appropriate level of acknowledgment. 'Dissed' is too informal, while 'acknowledged' and 'noted' are less emphatic than the context requires."
  },
  {
    id: 5,
    question: "In triangle ABC, angle A is 45°, and angle B is 60°. What is the measure of angle C?",
    options: ["65°", "75°", "85°", "95°"],
    correctAnswer: 1,
    difficulty: "Easy",
    topic: "Geometry",
    section: "Math",
    explanation: "In any triangle, the sum of all angles is 180°. Given angles A = 45° and B = 60°:\n180° - 45° - 60° = 75°\nTherefore, angle C = 75°"
  }
];

export async function loadFlashcards(): Promise<Flashcard[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFlashcards);
    }, 500);
  });
}