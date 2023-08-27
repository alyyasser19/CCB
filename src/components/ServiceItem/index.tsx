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
  const [downSm, setDownSm] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setDownSm(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className={`${downSm ? "w-full" : "w-1/5"}`}>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex flex-col gap-1">
            <div className="text-xl text-white font-bold leading-normal not-italic">
              {title}
            </div>
            <div className="text-xs font-normal leading-normal not-italic text-d2d2d2">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
