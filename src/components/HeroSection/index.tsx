import { playfair } from "@/utils/fonts";
import React from "react";
import StatsContainer from "../StatsContainer";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10 w-full relative text-center p-2 rounded-md">
      <div
        className={`${playfair.className} md:text-9xl font-semibold text-6xl sm:mt-0 mt-10`}
      >
        <h1 className="ccb-gradient">Commercial</h1>
        <h1>Consulting Bureau.</h1>
      </div>
      <div className="md:text-4xl text-3xl">
        <span>Elevating </span>
        <span className="font-black	ccb-gradient">Pharmaceuticals</span>
        <span>, </span>
        <span>Nourishing </span>
        <span className="font-black	ccb-gradient">Lives</span>
      </div>
      <StatsContainer />
      <a href="#Contact">
        <button type="button" className="btn-space w-3/4">Get In Touch </button>
      </a>
    </div>
  );
}

export default HeroSection;
