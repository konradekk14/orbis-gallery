import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Content from "./Content";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // pin content when container enters viewport (works with scrollsmoother)
  useGSAP(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      pin: sticky,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] -top-[100vh]">
        <div
          ref={stickyRef}
          className="h-[400px]"
          style={{
            position: "absolute",
            top: "calc(100vh - 400px)",
            left: 0,
            right: 0,
            width: "100%",
          }}
        >
          <Content />
        </div>
      </div>
    </div>
  );
}
