import React from "react";

interface TabsProps {
  tabs: string[];
  selected: number;
  setSelected: (selected: number) => void;
}
function Tabs({ tabs, selected, setSelected }: TabsProps) {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={`${selected === index ? "tab active" : "tab"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
