import React from 'react';
import texture from "../assets/texture.png";

function StartScreen({ onStart }) {
  return (
    <main className="relative flex flex-col items-center justify-center text-center w-full h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] px-4">
      
      {/* Textura responsive */}
      <img
        src={texture}
        alt="textura"
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 w-[80vw] max-w-[600px] z-0 pointer-events-none select-none"
      />

      {/* Contenido principal */}
      <div className="z-10 text-secondary space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-titan text-shadow-black">
          Puzzliversario 🧩 <span className="text-6xl sm:text-7xl md:text-8xl">+1</span>
        </h1>

        <p className="mb-4 text-xl sm:text-2xl md:text-3xl text-shadow-black">
          A resolver puzzles porque soy pobre
        </p>

        <button
          onClick={onStart}
          className="bg-third text-primary text-xl sm:text-2xl py-3 sm:py-4 px-8 sm:px-10 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
        >
          GO!
        </button>
      </div>
    </main>
  );
}

export default StartScreen;