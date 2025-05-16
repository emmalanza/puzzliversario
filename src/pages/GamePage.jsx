import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PuzzleBoard from '../components/PuzzleBoard';
import LevelCompleteModal from '../components/LevelCompleteModal';

const levels = [
  {
    size: 3,
    image: `${import.meta.env.BASE_URL}puzzle1.webp`,
    message: '¡Qué buena cabrón!'
  },
  {
    size: 4,
    image: `${import.meta.env.BASE_URL}puzzle2.webp`,
    message: '¡Lo que juegas pá!'
  },
  {
    size: 5,
    image: `${import.meta.env.BASE_URL}puzzle3.webp`,
    message: '¡Promoted to GoldV!'
  },
];


export default function GamePage() {
  const [level, setLevel] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const current = levels[level];

  const handleComplete = useCallback(() => {
    setCompleted(true);
  }, []);

  const nextLevel = () => {
    if (level === levels.length - 1) {
      navigate('/final');
    } else {
      setLevel(prev => prev + 1);
      setCompleted(false);
    }
  };

  return (
    <>

      <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-black text-primary">
        <h1 className="text-4xl text-secondary font-bold mb-4">Nivel {level + 1} de {levels.length} :)</h1>

        <PuzzleBoard
          key={level}
          size={current.size}
          image={current.image}
          onComplete={handleComplete}
        />
        {completed && (
          <LevelCompleteModal
            message={current.message}
            onNext={nextLevel}
            isLast={level === levels.length - 1}
          />
        )}
      </main>
    </>

  );
}
