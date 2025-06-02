/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { createPortal } from "react-dom";

const SelectBox = ({ options = [], label = "Select", width = "w-[150px] sm:w-[171px]", setSelectedData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options.length > 0 ? options[0] : null); // 🛠️ Default selected first option
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  
    const buttonRef = useRef(null);
  
    useEffect(() => {
      if (options.length > 0) {
        setSelectedData(options[0]); // 🛠️ Set parent state initially too
      }
    }, [options, setSelectedData]);
  
    const selectOption = (option) => {
      setSelectedOption(option);
      setSelectedData(option);
      setIsOpen(false);
    };
  
    useEffect(() => {
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY + 14,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    }, [isOpen]);
  
    return (
      <div className={`relative ${width}`}>
        {/* Box */}
        <div
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="pl-2 pr-5 text-xsm flex items-center justify-between gap-1 flex-shrink-0 cursor-pointer rounded-md"
        >
          <span>{selectedOption || label}</span>
          <FiChevronDown
            size={20}
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
  
        {/* Dropdown using Portal */}
        {isOpen &&
          createPortal(
            <div
              className="max-h-[150px] flex flex-col gap-1 overflow-y-auto shadow-2xl rounded-[0.25rem] z-50 text-white absolute"
              style={{
                position: "absolute",
                top: `${position.top}px`,
                left: `${position.left}px`,
                width: `${position.width}px`,
                background: "#222D42",
              }}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => selectOption(option)}
                  className={`px-4 py-2 cursor-pointer bg-[#222D42] border-b-[2px] shadow-2xl border-mainBg hover:bg-[#3B465E] ${
                    selectedOption === option ? "bg-[#3B465E]" : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>,
            document.body
          )}
      </div>
    );
  };
  

export default SelectBox;
