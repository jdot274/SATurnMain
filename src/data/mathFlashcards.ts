import type { Flashcard } from '@/types/practice';

export const mathFlashcards: Flashcard[] = [
  {
    question: "If 3x + 7 = 22, what is the value of x?",
    options: ["3", "5", "7", "15"],
    correctAnswer: "B",
    answer: "To solve for x:\n1. Subtract 7 from both sides: 3x = 15\n2. Divide both sides by 3: x = 5",
    topic: "Algebra and Functions",
    difficulty: "Easy"
  },
  {
    question: "A circle has a radius of 6 units. What is its area in square units?",
    options: ["36π", "12π", "18π", "24π"],
    correctAnswer: "A",
    answer: "The area of a circle is given by the formula A = πr².\nWith r = 6:\nA = π(6)² = 36π square units",
    topic: "Geometry and Measurement",
    difficulty: "Medium"
  },
  {
    question: "If f(x) = 2x² - 3x + 1, what is f(-2)?",
    options: ["3", "11", "13", "15"],
    correctAnswer: "D",
    answer: "Substitute x = -2 into f(x):\nf(-2) = 2(-2)² - 3(-2) + 1\n= 2(4) + 6 + 1\n= 8 + 6 + 1\n= 15",
    topic: "Algebra and Functions",
    difficulty: "Medium"
  },
  {
    question: "In triangle ABC, the measure of angle A is 45°, and the measure of angle B is 60°. What is the measure of angle C?",
    options: ["65°", "75°", "85°", "95°"],
    correctAnswer: "B",
    answer: "In any triangle, the sum of all angles is 180°.\nGiven angles A = 45° and B = 60°:\n180° - 45° - 60° = 75°\nTherefore, angle C = 75°",
    topic: "Geometry and Measurement",
    difficulty: "Easy"
  },
  {
    question: "If log₂(x) = 5, what is the value of x?",
    options: ["10", "25", "32", "64"],
    correctAnswer: "C",
    answer: "If log₂(x) = 5, then:\n2⁵ = x\n2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
    topic: "Algebra and Functions",
    difficulty: "Hard"
  }
];