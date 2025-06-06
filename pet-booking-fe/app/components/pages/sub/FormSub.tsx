"use client";

import React from "react";
import ToggleGroup, { ToggleGroupOption } from "../../forms/ToggleGroup";
import DatePicker from "../../forms/DatePicker";
import MultiToggleGroup, {
  MultiToggleGroupOption,
} from "../../forms/MultiToggleGroup";
import { createReservationAction } from "@/app/actions/reservation.action";
import { showToast } from "@/app/helpers/toast";

interface FormProps {
  className?: string;
}

const frequencyOptions: ToggleGroupOption[] = [
  { value: "recurring", label: "Recurring" },
  { value: "one-time", label: "One Time" },
];

const dayOptions: MultiToggleGroupOption[] = [
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
  { value: "thu", label: "Thu" },
  { value: "fri", label: "Fri" },
  { value: "sat", label: "Sat" },
  { value: "sun", label: "Sun" },
];

const timeOptions: MultiToggleGroupOption[] = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

type Errors = {
  frequency?: string;
  start_date?: string;
  selectedDays?: string;
  selectedTimes?: string;
  notes?: string;
};

const FormSub: React.FC<FormProps> = () => {
  const [frequency, setFrequency] = React.useState("recurring");
  const [date, setDate] = React.useState("");
  const [selectedDays, setSelectedDays] = React.useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = React.useState<string[]>([]);
  const [notes, setNotes] = React.useState("");
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitted, setSubmitted] = React.useState(false);

  function validate() {
    const errs: Errors = {};
    if (!frequency) errs.frequency = "Frequency is required.";
    if (!date) errs.start_date = "Start date is required.";
    if (selectedDays.length === 0)
      errs.selectedDays = "Please select at least one day.";
    if (selectedTimes.length === 0)
      errs.selectedTimes = "Please select at least one time.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate();
    setErrors(errs);
    setSubmitted(true);

    if (Object.keys(errs).length === 0) {
      const reservation = await createReservationAction({
        frequency,
        start_date: date,
        days: selectedDays,
        times: selectedTimes,
        notes,
      });

      switch (reservation.type) {
        case "success":
          showToast(
            '<div class="flex p-4 text-green-500"><p>✅ Reservation created!</p></div>'
          );
          break;

        case "validation-error":
          console.log(reservation.errors);
          setErrors(reservation.errors || {});
          showToast(
            `<div class="flex p-4"><p class="text-red-600">❌ ${reservation.message}</p></div>`
          );
          return;

        case "server-error":
        case "connection-error":
        case "unknown-error":
          showToast(
            `<div class="flex p-4"><p class="text-red-600">${reservation.message}</p></div>`
          );
          return;

        default:
          showToast(
            `<div class="flex p-4"><p class="text-red-600">${reservation.message}</p></div>`
          );
          return;
      }

      // Clear all fields after successful submission
      setFrequency("recurring");
      setDate("");
      setSelectedDays([]);
      setSelectedTimes([]);
      setNotes("");
      setSubmitted(false);
      setErrors({});
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="mx-5" onSubmit={handleSubmit} noValidate>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2c2e35] mb-6">
          We’ll take your dog for a walk. Just tell us when!
        </h2>

        {/* Frequency & Start Date */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <ToggleGroup
              label="Frequency"
              options={frequencyOptions}
              value={frequency}
              onChange={setFrequency}
            />
            {submitted && errors.frequency && (
              <span className="text-red-600 text-sm">{errors.frequency}</span>
            )}
          </div>
          <div className="flex-1">
            <DatePicker
              value={date}
              onChange={setDate}
              restriction="future"
              label="Start Date"
            />
            {submitted && errors.start_date && (
              <span className="text-red-600 text-sm">{errors.start_date}</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <MultiToggleGroup
            label="Days (Select all that apply)"
            options={dayOptions}
            values={selectedDays}
            onChange={setSelectedDays}
          />
          {submitted && errors.selectedDays && (
            <span className="text-red-600 text-sm">{errors.selectedDays}</span>
          )}
        </div>

        <div className="mb-6">
          <MultiToggleGroup
            label="Times (Select all that apply)"
            options={timeOptions}
            values={selectedTimes}
            onChange={setSelectedTimes}
          />
          {submitted && errors.selectedTimes && (
            <span className="text-red-600 text-sm">{errors.selectedTimes}</span>
          )}
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-medium text-[#2c2e35]">
            Notes for your sitter
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            placeholder="Route preferences, leash location, treats given, etc."
            className="w-full px-4 py-2 rounded-md border border-[#eadede] bg-white"
          />
          {submitted && errors.notes && (
            <span className="text-red-600 text-sm">{errors.notes}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#3b4252] text-white rounded-full font-semibold text-lg hover:bg-[#232733] transition"
        >
          Schedule Service
        </button>
      </form>
    </div>
  );
};

export default FormSub;
