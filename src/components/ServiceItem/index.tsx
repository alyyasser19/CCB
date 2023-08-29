"use client";
import React from "react";
import "../../app/globals.css";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

function ServiceItem({
  title,
  description,
  icon,
}: ServiceItemProps): JSX.Element {

  return (
    <div className={"w-full lg:w-1/5"}>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex flex-col gap-1">
            <div className="text-2xl text-white font-bold leading-normal not-italic">
              {title}
            </div>
            <div className="text-md font-normal leading-normal not-italic text-d2d2d2">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
