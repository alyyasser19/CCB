"use client";
import React from "react";
import Tabs from "../Tabs";
import AboutUsSection from "../AboutUsSection";
import { aboutUsSections } from "@/presets/aboutUsSections";

function AboutUs() {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="w-full">
      <div className="relative w-full md:mt-10 mt-16 about-us">
        <Tabs
          tabs={[
            "Companies We Represent",
            "Global Representation",
            "Global Reach & Care",
          ]}
          selected={selected}
          setSelected={setSelected}
        />
        <AboutUsSection {...aboutUsSections[selected]} />
      </div>
    </div>
  );
}

export default AboutUs;
