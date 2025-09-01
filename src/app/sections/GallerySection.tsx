"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "../constants/gallery";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const container = containerRef.current!;
    const track = trackRef.current!;

    const getTotalX = () => track.scrollWidth - container.clientWidth;

    const tween = gsap.to(track, {
      x: () => -getTotalX(),
      ease: "none",
      overwrite: true,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getTotalX()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <section className="gallery-section w-full">
      <div
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden flex items-center"
        // ^ flex + items-center ensures track is vertically centered
      >
        {/* Horizontal track */}
        <div ref={trackRef} className="flex will-change-transform px-6 gap-6">
          {galleryImages.map((image, i) => (
            <div
              key={i}
              className="
                relative flex-none rounded-2xl overflow-hidden
                h-[70vh]
                w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]
                bg-neutral-200
              "
            >
              <img
                src={image.src}
                alt={image.alt ?? `Gallery image ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
