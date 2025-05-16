import React from 'react';

const photos = [
  { src: '/sticker1.webp', style: { top: '10%', left: '5%', animationDelay: '0s' } },
  { src: '/sticker1.webp', style: { top: '5%', right: '5%', animationDelay: '1.5s' } },
  { src: '/sticker1.webp', style: { bottom: '5%', left: '1%', animationDelay: '3s' } },
  { src: '/sticker1.webp', style: { bottom: '5%', right: '10%', animationDelay: '4.5s' } },
];

export default function StickerPhotos() {
  return (
    <>
      {photos.map(({ src, style }, i) => (
        <div
          key={i}
          className="fixed z-10 pointer-events-none select-none"
          style={{
            ...style,
            animation: `shakeMove 6s ease-in-out infinite`,
            animationDelay: style.animationDelay,
          }}
        >
          <div className="relative w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[250px]">
            <img
              src={src}
              alt={`Sticker ${i + 1}`}
              className="w-full h-full object-contain rounded-xl opacity-50
              grayscale saturate-150 brightness-100 contrast-125"
            />

          </div>
        </div>
      ))}
    </>
  );
}
