import { playfair } from "@/utils/fonts";
import React from "react";

interface Props {
  topText: string | React.ReactNode;
  bottomText: string;
  topSvg?: React.ReactNode;
}

function Index({ topText, bottomText, topSvg }: Props) {
  return (
    <div className="flex flex-col items-center bg-green-700 bg-opacity-80 rounded-md p-5 h-36 w-36 justify-between">
      {topSvg ? (
        topSvg
      ) : (
        <h4 className={`${playfair} text-5xl font-black text-white`}>
          {topText}
        </h4>
      )}
      <div className="text-lg font-semibold">{bottomText}</div>
    </div>
  );
}

export default Index;
