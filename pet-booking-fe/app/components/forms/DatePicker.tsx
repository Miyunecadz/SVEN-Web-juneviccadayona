import React from "react";

type DateRestriction = "future" | "past" | "all";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  restriction?: DateRestriction;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
}

const getMin = (restriction: DateRestriction) => {
  if (restriction === "future") {
    // Only allow today and future
    return new Date().toISOString().slice(0, 10);
  }
  return undefined;
};

const getMax = (restriction: DateRestriction) => {
  if (restriction === "past") {
    // Only allow today and past
    return new Date().toISOString().slice(0, 10);
  }
  return undefined;
};

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  restriction = "all",
  label,
  className = "",
  id,
  name,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id || name} className="mb-2 font-medium text-[#2c2e35]">
          {label}
        </label>
      )}
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        min={getMin(restriction)}
        max={getMax(restriction)}
        onChange={e => onChange(e.target.value)}
        className="px-4 py-3 rounded-md border border-[#eadede] bg-white text-[#2c2e35] focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DatePicker;