import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/styles.css";

const timelineData = [
  {
    date: "Mayo 2024",
    image: `${import.meta.env.BASE_URL}galery/1.webp`,
    text: "Visita al Jurásico 🦖",
  },
  {
    date: "Junio 2024",
    image: `${import.meta.env.BASE_URL}galery/2.webp`,
    text: "Carita de melocotón 🍑",
  },
  {
    date: "Agosto 2024",
    image: `${import.meta.env.BASE_URL}galery/3.webp`,
    text: "Viva México Señores",
  },
  {
    date: "Septiembre 2024",
    image: `${import.meta.env.BASE_URL}galery/4.webp`,
    text: "Siendo gorditos en La Regenta (a ver cuando invitas a merendar)",
  },
  {
    date: "Abril 2025",
    image: `${import.meta.env.BASE_URL}galery/5.webp`,
    text: "Salto temporal porque me quedé sin móvil sadge, aún así nuestra mejor foto by far",
  },
];


export default function FinalTimeline() {
  const containerRef = useRef(null);
  const [openImage, setOpenImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = timelineData.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = containerRef.current.querySelectorAll(".timeline-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 80, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);


  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => {
      const next = prev + 1;
      if (next >= totalImages) {
        setTimeout(() => setIsLoading(false), 500); 
      }
      return next;
    });
  };

  return (
    <>

      {isLoading && (
        <div className="fullscreen-spinner">
          <div className="spinner"></div>
        </div>
      )}


      <main
        ref={containerRef}
        className={`relative flex flex-col w-full max-w-6xl mx-auto px-4 py-16 md:py-20 text-primary ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-titan text-secondary mb-16 md:mb-24 text-center z-10 relative">
          Pequeña timeline de nuestro primerito año
        </h1>

        <div className="relative border-l-2 border-third pl-6 sm:pl-8 md:pl-10 z-10 space-y-16 md:space-y-20">
          {timelineData.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`timeline-item ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col md:flex-row items-center gap-6`}
              >
                <div className="text-third font-bold w-full md:w-24 text-xl md:text-2xl mb-2 md:mb-0">
                  {item.date}
                </div>

                <div className="md:w-1/2 group cursor-pointer" onClick={() => setOpenImage(item.image)}>
                  <img
                    src={item.image}
                    alt={`Recuerdo ${idx + 1}`}
                    onLoad={handleImageLoad}
                    className="rounded-xl shadow-lg w-full object-cover max-h-[400px] transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <div className="md:w-1/2 mt-4 md:mt-0">
                  <p className="text-xl sm:text-2xl text-center font-semibold text-shadow-black backdrop-blur-sm bg-primary/10 p-4 rounded-xl">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-2xl xl:text-4xl uppercase text-secondary text-center font-titan mt-20">
          Por seguir sumando más momentos y más aniversarios - Te amooooooo
        </h2>
        <h2 className="text-xl uppercase text-primary bg-black rounded-xl text-center self-center mt-10 w-1/3">
          Made by Mic with ❤
        </h2>

        {openImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={() => setOpenImage(null)}
          >
            <div
              className="relative transform opacity-0 scale-90"
              style={{ animation: "fadeInZoom 0.5s forwards" }}
            >
              <img
                src={openImage}
                alt="Ampliada"
                className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}