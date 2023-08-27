import { playfair } from "@/utils/fonts";
import React from "react";
import StatsContainer from "../StatsContainer";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10 w-full relative text-center  p-2 rounded-md">
      <div className={`${playfair.className} text-9xl font-semibold`}>
        <h1 className="ccb-gradient">Comercial</h1>
        <h1>Consulting Bureau.</h1>
      </div>
      <div className="text-4xl">
        <span>Elevating </span>
        <span className="font-black	ccb-gradient">Pharmaceuticals</span>
        <span>, </span>
        <span>Nourishing </span>
        <span className="font-black	ccb-gradient">Lives</span>
      </div>
      <div className="text-lg w-3/5 self-center font-semibold text">
        Experience unmatched pharmaceutical consulting, representation, and
        marketing. Our services amplify market presence through regulatory
        support, strategic campaigns, and holistic nutritional expertise.
      </div>
      <StatsContainer />
    </div>
  );
}

export default HeroSection;
