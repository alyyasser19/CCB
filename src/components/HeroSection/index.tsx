import { playfair } from "@/utils/fonts";
import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <div className={`${playfair.className} text-7xl font-semibold`}>
        <h1 className="ccb-gradient">Comercial</h1>
        <h1>Consulting Bureau.</h1>
      </div>
      <div className="text-2xl">
        <span>Elevating </span>
        <span className="font-black	ccb-gradient">Pharmaceuticals</span>
        <span>, </span>
        <span>Nourishing </span>
        <span className="font-black	ccb-gradient">Lives</span>
      </div>
      <div className="text-lg">
        Experience unmatched pharmaceutical consulting, representation, and
        marketing. Our services amplify market presence through regulatory
        support, strategic campaigns, and holistic nutritional expertise.
      </div>
    </div>
  );
}

export default HeroSection;
