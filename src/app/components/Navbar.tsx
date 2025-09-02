import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const REVEAL_FROM = "polygon(0 0, 100% 0, 100% 0, 0 0)";
const REVEAL_TO = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  // gsap: initial state + reveal animation
  useGSAP(() => {
    const el = navRef.current;
    gsap.set(el, {
      autoAlpha: 1,
      clipPath: REVEAL_FROM,
      WebkitClipPath: REVEAL_FROM,
    });

    gsap.to(el, {
      clipPath: REVEAL_TO,
      WebkitClipPath: REVEAL_TO,
      duration: 1.5,
      ease: "power2.out",
      delay: 1.2,
    });
  });

  return (
    <nav
      ref={navRef}
      className="navbar fixed left-0 top-0 z-50 flex w-full flex-row items-center justify-between p-2 md:px-8 opacity-0 backdrop-blur-md"
    >
      <div>
        <h2 className="text-black/60">about</h2>
      </div>
      <div>
        <h1 className="text-3xl font-medium text-black md:text-4xl lg:text-6xl">
          orbis
        </h1>
      </div>
      <div>
        <h2 className="text-black/60">connect</h2>
      </div>
    </nav>
  );
};

export default Navbar;
