import React from "react";
import { IoArrowForwardCircle, IoPlayForwardCircle } from "react-icons/io5";

interface AboutUsSectionProps {
  title: string;
  description: string;
  buttonName: string;
  images: JSX.Element[];
}
function AboutUsSection({
  title,
  description,
  buttonName,
  images,
}: AboutUsSectionProps) {
  return (
    <div className="about-us-container">
      <div className="w-3/5 flex flex-col gap-7 justify-between">
        <h5 className="text-2xl font-bold leading-normal">{title}</h5>
        <p className="font-light leading-normal text-lg">{description}</p>
        <a href="#Contact">
          <div className="flex flex-row gap-2">
            <button className="font-light leading-normal text-xl">
              {buttonName}
            </button>
            <IoArrowForwardCircle
              size={32}
              style={{
                color: "#61FFD9",
              }}
            />
          </div>
        </a>
      </div>

      <div className="w-4/12 flex flex-col gap-7 ">
        {images.map((image, index) => (
          <div key={index}>{image}</div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsSection;
