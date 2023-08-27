import { playfair } from "@/utils/fonts";
import React from "react";

function Logo() {
  return (
    <h1 className={`${playfair.className} text-5xl text-transparent font-medium bg-white hover:bg-gradient-to-l from-green-500 to-green-300 bg-clip-text`}>
      CCB.
    </h1>
  );
}

export default Logo;
