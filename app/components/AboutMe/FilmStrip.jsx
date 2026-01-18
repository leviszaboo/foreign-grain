"use client";

import Image from "../Image";

export default function FilmStrip({ sources }) {
  const images = sources.slice(0, 6);
  // Duplicate for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="h-screen overflow-hidden">
      <div className="animate-scroll-up flex flex-col gap-3">
        {duplicatedImages.map((source, index) => (
          <div
            key={`${source.url}-${index}`}
            className="relative p-1 bg-white shrink-0"
          >
            <Image
              src={source.url}
              alt=""
              width={400}
              height={400 / (source.aspectRatio || 0.67)}
              className="w-full h-auto object-cover"
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
          animation: scroll-up 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
