import React from 'react';
import background from "../assets/final-bg.webp";
import FinalTimeline from '../components/FinalTimeline';

export default function FinalPage() {
  return (
    <div
      className="min-h-screen bg-black text-primary pt-12 bg-fixed 2xl:bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >

      <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-xs"></div>

      <div className="relative z-10">
        <FinalTimeline />
      </div>

    </div>
  );
}
