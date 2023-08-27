import React from "react";
import ServiceItem from "../ServiceItem";
import { serviceItems } from "../../presets/serviceItems";
import "../../app/globals.css";

function ServicesSection() {
  return (
    <div className="services-container relative mt-12">
      <div className="services-title">
        <h3>Services</h3>
      </div>
      <div className="flex flex-wrap gap-12 justify-center bg-inherit">
        {serviceItems.map((item) => (
          <ServiceItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
