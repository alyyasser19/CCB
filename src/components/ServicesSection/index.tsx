import React from "react";
import ServiceItem from "../ServiceItem";
import { serviceItems } from "../../presets/serviceItems";
import "../../app/globals.css";

function ServicesSection() {
  return (
    <div id="Services">
      <div className="services-container relative mt-16  background-grad">
        <div className="services-title">
          <h3>Services</h3>
        </div>
        <div className="flex md:flex-wrap md:flex-row flex-col gap-12 justify-center">
          {serviceItems.map((item) => (
            <ServiceItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
