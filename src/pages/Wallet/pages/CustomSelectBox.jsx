import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const CustomSelectBox = ({ seletedOptionBg="[#3D4659]", titleBg, modalBg, optionBg, optionHoverBg, optionH, title, options = [], selected, onChange, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={wrapperRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full rounded px-4 py-2 flex items-center justify-between cursor-pointer bg-${titleBg}`}
            >
                <div className="flex flex-col">
                    <span className="text-xsm text-textGray2">{title}</span>
                    <span className="text-xsm ">{selected || placeholder}</span>
                </div>
                <FiChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </div>

            {isOpen && (
                <ul className={`absolute z-10 mt-1 p-1 w-full bg-${modalBg} max-h-60 hide-scrollbar rounded-md shadow-xl overflow-y-auto`}>
                    {options.map((option, idx) => (
                        <li
                            // style={{ height: optionH }}
                            key={idx}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className={`px-4 text-xsm  w-full py-1.5 rounded bg-${optionBg} ${selected===option?`text-bg2 bg-${seletedOptionBg}`:`bg-${optionBg}`} hover:bg-${optionHoverBg} mt-1 cursor-pointer`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelectBox;
