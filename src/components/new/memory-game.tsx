'use client'

import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const initialCards = [
      { id: 1, content: 'A', isFlipped: false, isMatched: false },
      { id: 2, content: 'A', isFlipped: false, isMatched: false },
      { id: 3, content: 'B', isFlipped: false, isMatched: false },
      { id: 4, content: 'B', isFlipped: false, isMatched: false },
      // Add more pairs as needed
    ];
    setCards(shuffleArray(initialCards));
  }, []);

  function shuffleArray(array: Card[]): Card[] {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleCardClick(index: number) {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched) return;

    const newFlippedCards = [...flippedCards, index];
    const newCards = cards.map((card, i) =>
      i === index ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsChecking(true);
      setTimeout(() => checkMatch(newFlippedCards), 1000);
    }
  }

  function checkMatch(indices: number[]) {
    const [firstIndex, secondIndex] = indices;
    const newCards = [...cards];

    if (newCards[firstIndex].content === newCards[secondIndex].content) {
      newCards[firstIndex].isMatched = true;
      newCards[secondIndex].isMatched = true;
    } else {
      newCards[firstIndex].isFlipped = false;
      newCards[secondIndex].isFlipped = false;
    }

    setCards(newCards);
    setFlippedCards([]);
    setIsChecking(false);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${card.isFlipped ? 'flipped' : ''} ${
            card.isMatched ? 'matched' : ''
          }`}
          onClick={() => handleCardClick(index)}
        >
          {card.isFlipped || card.isMatched ? card.content : ''}
        </div>
      ))}
    </div>
  );
}

export default MemoryGame; 