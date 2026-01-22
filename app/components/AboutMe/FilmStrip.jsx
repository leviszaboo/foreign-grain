"use client";

import Image from "next/image";

export default function FilmStrip({ sources }) {
  const images = sources.slice(0, 6);
  // Duplicate for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="animate-scroll-up flex flex-col">
        {duplicatedImages.map((source, index) => (
          <div
            key={`${source.url}-${index}`}
            className="relative shrink-0 w-full"
          >
            <Image
              src={source.url}
              alt=""
              fill
              className="!relative w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
