import { useState, useEffect } from 'react';

function shuffle(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function PuzzleBoard({ size, image, onComplete }) {
  const total = size * size;
  const [tiles, setTiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const arr = Array.from({ length: total }, (_, i) => i);
    setTiles(shuffle(arr));
    setSelected(null);
  }, [size]);

  const handleClick = (index) => {
    if (showHint) return; // Evitar clics mientras se muestra la pista

    if (selected === null) {
      setSelected(index);
    } else if (selected === index) {
      setSelected(null);
    } else {
      const newTiles = [...tiles];
      [newTiles[selected], newTiles[index]] = [newTiles[index], newTiles[selected]];
      setTiles(newTiles);
      setSelected(null);

      if (newTiles.every((val, idx) => val === idx)) {
        setTimeout(onComplete, 300);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setShowHint(!showHint)}
        className="px-4 py-2 bg-third text-white rounded hover:scale-110 transition cursor-pointer"
      >
        {showHint ? 'Ocultar pista' : 'Mostrar pista'}
      </button>

      <div className="relative w-[min(90vw,500px)] h-[min(90vw,500px)] 2xl:w-[800px] 2xl:h-[800px]">
        <div
          className="grid gap-1 absolute top-0 left-0 w-full h-full z-20"
          style={{
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
          }}
        >
          {tiles.map((tile, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`relative aspect-square border cursor-pointer select-none
                ${selected === i ? 'ring-2 ring-secondary' : ''}
              `}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `${size * 100}%`,
                backgroundPosition: `${(tile % size) * 100 / (size - 1)}% ${(Math.floor(tile / size)) * 100 / (size - 1)}%`,
              }}
            ></div>
          ))}
        </div>

        {showHint && (
          <img
            src={image}
            alt="Pista"
            className="absolute top-0 left-0 w-full h-full object-cover z-30 rounded opacity-50"
          />
        )}
      </div>
    </div>
  );
}

export default PuzzleBoard;
