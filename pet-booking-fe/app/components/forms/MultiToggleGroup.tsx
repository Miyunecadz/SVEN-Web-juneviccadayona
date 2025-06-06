import React from "react";

export interface MultiToggleGroupOption {
  value: string;
  label: string;
}

interface MultiToggleGroupProps {
  options: MultiToggleGroupOption[];
  values: string[];
  onChange: (values: string[]) => void;
  label?: string;
  className?: string;
}

const MultiToggleGroup: React.FC<MultiToggleGroupProps> = ({
  options,
  values,
  onChange,
  label,
  className = "",
}) => {
  // Toggle selection for an option
  const handleToggle = (optionValue: string) => {
    if (values.includes(optionValue)) {
      onChange(values.filter(v => v !== optionValue));
    } else {
      onChange([...values, optionValue]);
    }
  };

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
                values.includes(option.value)
                  ? "bg-[#ded1ce] text-[#2c2e35]"
                  : "bg-white text-[#2c2e35]"
              }
              ${idx !== options.length - 1 ? "border-r border-[#eadede]" : ""}
            `}
            onClick={() => handleToggle(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultiToggleGroup;