import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

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
    <div className="about-us-section">
      <div className="md:w-3/5 w-full flex flex-col gap-7 justify-between">
        <h5 className="text-2xl font-bold leading-normal">{title}</h5>
        <p className="font-normal leading-8 text-xl">{description}</p>
        <a href="#Contact" className="md:self-start self-center">
          <div className="flex flex-row gap-2">
            <button type="button" className="font-light leading-normal text-xl">
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

      <div className="md:w-4/12 w-full flex flex-col gap-7 md:mt-0 mt-5">
        {images.map((image, index) => (
          <div key={index}>{image}</div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsSection;
