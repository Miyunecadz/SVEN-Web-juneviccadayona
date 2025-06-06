'use client'

import React from "react";

export interface ToggleGroupOption {
  value: string;
  label: string;
}

interface ToggleGroupProps {
  options: ToggleGroupOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  options,
  value,
  onChange,
  label,
  className = "",
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block mb-2 font-medium text-[#2c2e35]">{label}</label>
      )}
      <div className="flex rounded-md overflow-hidden border border-[#eadede] bg-white w-full">
        {options.map((option, idx) => (
          <button
            key={option.value}
            type="button"
            className={`flex-1 px-4 py-3 text-center font-medium transition
              ${
                value === option.value
                  ? "bg-[#ded1ce] text-[#2c2e35]"
                  : "bg-white text-[#2c2e35]"
              }
              ${
                idx !== options.length - 1 ? "border-r border-[#eadede]" : ""
              }
            `}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleGroup;