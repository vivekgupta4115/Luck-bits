/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import "./datePicker.css"; // Custom overrides

export default function CustomDatePicker({title, w="60"}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className={`relative w-${w} bg-titleBg rounded p-2`}>
            <label className="text-xs text-white block h-3.5">{title}</label>
            <div className="flex items-center justify-between rounded text-white text-sm">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd.MM.yyyy"
                    className="bg-transparent focus:outline-none text-xsm w-full"
                    calendarClassName="custom-calendar"
                    popperPlacement="bottom-start"
                />
                <FiCalendar size={25} className="ml-2  text-[#A4B0BE]" />
            </div>
        </div>
    );
}
