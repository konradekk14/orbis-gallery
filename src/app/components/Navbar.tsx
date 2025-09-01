import { useGSAP } from "@gsap/react";

const Navbar = () => {
  return (
    <nav className="fixed flex flex-row justify-between top-0 left-0 z-50 w-full md:p-4 p-2">
      <div>
        <h2 className="text-black/70">about</h2>
      </div>

      <div>
        <h1 className="text-black md:text-4xl lg:text-6xl text-3xl font-medium">
          orbis
        </h1>
      </div>

      <div>
        <h2 className="text-black/70">connect</h2>
      </div>
    </nav>
  );
};

export default Navbar;
