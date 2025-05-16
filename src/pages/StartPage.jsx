import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartScreen from '../components/StartScreen';
import StickerPhotos from '../components/StickerPhotos';

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <>
     
      <div className="hidden xl:block">
        <StickerPhotos />
      </div>

      <StartScreen onStart={() => navigate('/juego')} />
    </>
  );
}