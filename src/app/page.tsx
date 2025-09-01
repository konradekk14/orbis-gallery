"use client";

import React from "react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import HeroSection from "./sections/HeroSection";
import DescriptionSection from "./sections/DescriptionSection";
import GallerySection from "./sections/GallerySection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <DescriptionSection />
          <GallerySection />
          <div className="min-h-screen w-full bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
