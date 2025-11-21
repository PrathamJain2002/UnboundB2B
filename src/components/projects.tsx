"use client";

import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = ["/Card 3.png", "/Card 2.png", "/Card 1.png"];

  return (
    <div className="flex w-full flex-col items-center gap-10">
      {/* Header Section */}
      <div
        className="relative overflow-visible w-full max-w-[753.58px] mx-auto border px-4"
        style={{
          aspectRatio: "753.5800170898438 / 186",
          opacity: 1,
          width: 'min(100%, 753.58px)',
          borderWidth: '1px',
        }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-3xl">
          <Image
            src="/Projects.png"
            alt="Projects header"
            fill
            priority
            className="object-contain object-left"
          />
        </div>
        <div
          className="absolute z-10"
          style={{
            width: 'clamp(60px, 8vw, 84px)',
            height: 'clamp(8px, 1vw, 10px)',
            opacity: 1,
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Image
            src="/pseudo.png"
            alt="Decorative wavy line"
            width={84}
            height={10}
            className="object-contain w-full h-full"
          />
        </div>
        <div
          className="absolute z-10 text-center"
          style={{
            width: 'clamp(280px, 90%, 437.16px)',
            opacity: 1,
            top: 'calc(30% + 20px)',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-jost), sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(24px, 4vw, 42px)',
            lineHeight: 'clamp(30px, 5vw, 53px)',
            letterSpacing: '0.42px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>
            <div style={{ whiteSpace: 'nowrap' }}>Checkout our Recently</div>
            <div style={{ whiteSpace: 'nowrap' }}>Completed Projects</div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8 px-4">
        <div className="flex w-full justify-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{
                width: 'clamp(280px, 30vw, 370px)',
                aspectRatio: '370 / 536',
                opacity: 1,
              }}
            >
              <Image
                src={card}
                alt={`Project card ${index + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="flex gap-2 items-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index % cards.length)}
              className="transition-all"
              style={{
                width: index === currentIndex ? 'clamp(24px, 3vw, 30px)' : 'clamp(6px, 1vw, 8px)',
                height: index === currentIndex ? 'clamp(8px, 1.2vw, 10px)' : 'clamp(6px, 1vw, 8px)',
                borderRadius: index === currentIndex ? '30px' : '50%',
                backgroundColor: index === currentIndex ? '#6D18EF' : '#FFFFFF',
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

