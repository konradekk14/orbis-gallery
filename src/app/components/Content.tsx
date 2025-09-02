import React from "react";

export default function Content() {
  return (
    <div className="bg-[#4E4E5A]/30 py-8 px-12 h-full w-full flex flex-col justify-end">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">orbis</h1>
      <p>© copyright 2025</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-black/90 underline">About</h3>
        <p>Projects</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-black/90 underline">Social</h3>
        <p>News</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
