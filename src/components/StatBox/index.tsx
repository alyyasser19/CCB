import { playfair } from "@/utils/fonts";
import React from "react";

interface Props {
  topText: string | React.ReactNode;
  bottomText: string;
  topSvg?: React.ReactNode;
}

function Index({ topText, bottomText, topSvg }: Props) {
  return (
    <div className="flex flex-col items-center card-highlight rounded-xl p-5 h-36 md:w-36 justify-between w-5/6">
      {topSvg ? (
        topSvg
      ) : (
        <h4 className={`${playfair} text-5xl font-black text-slate-950`}>
          {topText}
        </h4>
      )}
      <div className="text-lg font-semibold">{bottomText}</div>
    </div>
  );
}

export default Index;
