"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const DescriptionSection = () => {
  useGSAP(() => {
    const paragraphSplit = SplitText.create(".description-section p", {
      type: "words",
    });

    gsap.to(paragraphSplit.words, {
      color: "black",
      ease: "power1.out",
      stagger: 0.75,
      scrollTrigger: {
        trigger: ".description-section",
        start: "top center",
        end: "40% center",
        scrub: 1.5,
      },
    });
  });

  return (
    <section className="description-section w-full">
      <div className="container mx-auto flex justify-center items-center relative py-32">
        <div className="max-w-[800px] h-full">
          <div className="md:text-6xl text-3xl leading-[5vw] tracking-wide text-black/30 font-normal lowercase flex flex-col text-center justify-center items-center">
            <p>
              orbis is a concept-generated gallery born from the dialogue
              between human curiosity and machine creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
