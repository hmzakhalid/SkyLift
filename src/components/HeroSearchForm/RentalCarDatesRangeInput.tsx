import React, { Fragment, useEffect, useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  AnchorDirectionShape,
  DateRangePicker,
  FocusedInputShape,
} from "react-dates";
import { DateRage } from "./StaySearchForm";
import { FC } from "react";
// import { Listbox } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/24/solid";
import { TimeRage } from "./RentalCarSearchForm";
import useWindowSize from "hooks/useWindowResize";
import ButtonSubmit from "./ButtonSubmit";
import { PathName } from "routers/types";
import useNcId from "hooks/useNcId";

type Fields = "pickUp" | "dropOff";

export interface RentalCarDatesRangeInputProps {
  defaultDateValue: DateRage;
  // defaultTimeValue: TimeRage;
  defaultFocus?: FocusedInputShape | null;
  onChange?: (data: { stateDate: DateRage; stateTimeRage: TimeRage }) => void;
  onFocusChange?: (focus: FocusedInputShape | null) => void;
  fieldClassName?: string;
  wrapFieldClassName?: string;
  className?: string;
  numberOfMonths?: number;
  anchorDirection?: AnchorDirectionShape;
  buttonSubmitHref?: PathName;
  hasButtonSubmit?: boolean;
  buttonSubmitFunction?: any
}

const RentalCarDatesRangeInput: FC<RentalCarDatesRangeInputProps> = ({
  defaultDateValue,
  // defaultTimeValue,
  onChange,
  defaultFocus = null,
  onFocusChange,
  className = "",
  fieldClassName = "[ nc-hero-field-padding ]",
  wrapFieldClassName = "flex relative",
  numberOfMonths,
  anchorDirection,
  buttonSubmitHref = "/listing-car",
  hasButtonSubmit = true,
  buttonSubmitFunction
}) => {
  const [focusedInput, setFocusedInput] = useState(defaultFocus);
  const [stateDate, setStateDate] = useState(defaultDateValue);
  // const [stateTimeRage, setStateTimeRage] = useState(defaultTimeValue);
  const startDateId = useNcId();
  const endDateId = useNcId();
  //
  useEffect(() => {
    setStateDate(defaultDateValue);
  }, [defaultDateValue]);

  useEffect(() => {
    setFocusedInput(defaultFocus);
  }, [defaultFocus]);

  const windowSize = useWindowSize();

  const handleDateFocusChange = (focus: FocusedInputShape | null) => {
    setFocusedInput(focus);
    onFocusChange && onFocusChange(focus);
  };

  const renderInputpickUpDate = () => {
    const focused = focusedInput === "startDate";
    return (
      <div
        className={`flex flex-1 relative  ${fieldClassName} items-center space-x-3 cursor-pointer ${focused ? "nc-hero-field-focused" : " "
          }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nc-icon-field"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <div className="absolute inset-0" />

          <div className="inline-flex items-center text-base xl:text-lg font-semibold">
            <span className="flex-shrink-0">
              {stateDate.startDate
                ? stateDate.startDate.format("DD MMM")
                : "Pick up"}
            </span>
            {/* {stateDate.startDate && renderEditTime("pickUp")} */}
          </div>

          <span className="block mt-1 text-sm text-neutral-400 font-light leading-none">
            {stateDate.startDate ? "Pick up" : `Add date`}
          </span>
        </div>
      </div>
    );
  };

  const renderInputdropOffDate = () => {
    const focused = focusedInput === "endDate";
    return (
      <div
        className={`flex relative flex-[1.8] items-center cursor-pointer ${focused ? "nc-hero-field-focused" : " "
          }`}
      >
        <div className={`flex-1 flex ${fieldClassName} space-x-3 items-center`}>
          <div className="text-neutral-300 dark:text-neutral-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nc-icon-field"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="absolute inset-0" />

            <div className="inline-flex items-center text-base xl:text-lg font-semibold">
              <span className="flex-shrink-0">
                {stateDate.endDate
                  ? stateDate.endDate.format("DD MMM")
                  : "Drop off"}
              </span>
              {/* {stateDate.endDate && renderEditTime("dropOff")} */}
            </div>
            <span className="block mt-1 text-sm text-neutral-400 font-light leading-none">
              {stateDate.endDate ? "Drop off" : `Add date`}
            </span>
          </div>
        </div>
        {hasButtonSubmit && (
          <div className="pr-2 xl:pr-4 relative z-20">
            <ButtonSubmit
              onClick={buttonSubmitFunction}
              href={buttonSubmitHref} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`RentalCarDatesRangeInput relative flex z-10 ${className}  ${!!focusedInput ? "nc-date-focusedInput" : "nc-date-not-focusedInput"
        }`}
    >
      <div className="absolute inset-0 flex">
        <DateRangePicker
          startDate={stateDate.startDate}
          endDate={stateDate.endDate}
          focusedInput={focusedInput}
          onDatesChange={(date) => {
            setStateDate(date);
            // onChange && onChange({ stateDate: date, stateTimeRage });
          }}
          onFocusChange={handleDateFocusChange}
          startDateId={startDateId}
          endDateId={endDateId}
          daySize={windowSize.width > 1279 ? 54 : 44}
          orientation={"horizontal"}
          showClearDates
          noBorder
          hideKeyboardShortcutsPanel
          numberOfMonths={
            numberOfMonths || (windowSize.width < 1024 ? 1 : undefined)
          }
          anchorDirection={anchorDirection}
          reopenPickerOnClearDates
        />
      </div>

      <div className={`flex-1 ${wrapFieldClassName}`}>
        {renderInputpickUpDate()}
        {renderInputdropOffDate()}
      </div>
    </div>
  );
};

export default RentalCarDatesRangeInput;
