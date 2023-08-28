import React from "react";
import StatBox from "../StatBox";
import Image from "next/image";
import EG from "../../assets/eg.svg";
import AE from "../../assets/ae.svg";

function index() {
  return (
    <div className="flex justify-center gap-4 md:flex-row flex-col">
      <StatBox topText={"40+"} bottomText={"Years of Experience"} />
      <StatBox topText={"20+"} bottomText={"Satisfied Client"} />
      <StatBox
        topText={undefined}
        bottomText={"Heliopolis"}
        topSvg={<Image src={EG} alt={"EG"} />}
      />
      <StatBox
        topText={undefined}
        bottomText={"Shams"}
        topSvg={<Image src={AE} alt={"Shams"} width={100} height={100} />}
      />
    </div>
  );
}

export default index;
