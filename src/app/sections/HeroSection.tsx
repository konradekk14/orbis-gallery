"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    gsap.to(".hero-image-wrap", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 0.75,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <section className="hero-section min-h-screen w-full flex items-center justify-center">
      <div className="hero-image-wrap w-[75vw] h-auto rounded-2xl overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Hero"
          width={1600}
          height={1200}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
