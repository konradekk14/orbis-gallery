"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const IMAGES: { src: string; alt: string; priority?: boolean }[] = [
  { src: "/images/abstract_calm.png", alt: "Hero", priority: true },
  { src: "/images/abstract_orange.png", alt: "Hero1" },
  { src: "/images/abstract_pink.png", alt: "Hero2" },
  { src: "/images/modern.png", alt: "Hero3" },
  { src: "/images/hero.webp", alt: "Hero4" },
  { src: "/images/abstract_purple.png", alt: "Hero5" },
  { src: "/images/torus.png", alt: "Hero6" },
];

export default function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  // gsap setup: initial states, intro, scroll expansion
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const bg = bgRef.current;
        const wrap = imageWrapRef.current;

        // initial states
        gsap.set(bg, {
          scaleY: 0,
          transformOrigin: "bottom center",
          willChange: "transform",
        });
        gsap.set(wrap, { autoAlpha: 0 });

        const imgs = gsap.utils.toArray<HTMLElement>(".img");
        gsap.set(imgs, {
          transformOrigin: "50% 50%",
          scale: 0,
          autoAlpha: 1,
          willChange: "transform, opacity",
        });
        imgs.forEach((el, i) => gsap.set(el, { zIndex: i + 1 }));

        // intro timeline
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.to(bg, { scaleY: 1, duration: 1.2 })
          .to(wrap, { autoAlpha: 1, duration: 0.45 }, "-=0.5")
          .to(
            imgs,
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: "back.out(1.4)",
              force3D: true,
            },
            "-=0.2"
          );

        // scroll expansion
        gsap.to(wrap, {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          duration: 0.75,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        });
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="hero-section relative mb-4 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* bg grow */}
      <div
        ref={bgRef}
        className="hero-bg absolute inset-0 z-0 bg-white will-change-transform"
        aria-hidden="true"
      />

      {/* image wrapper expands on scroll */}
      <div
        ref={imageWrapRef}
        className="hero-image-wrap relative z-10 w-[60vw] overflow-hidden rounded-2xl opacity-0 will-change-transform"
      >
        <div className="relative w-full" style={{ paddingTop: "62.5%" }}>
          {/* image stack */}
          {IMAGES.map(({ src, alt, priority }, i) => (
            <div
              key={i}
              className="img absolute inset-0 origin-center scale-0 opacity-0"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority={priority}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
