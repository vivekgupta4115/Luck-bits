import React from "react";

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#1F2937] p-6 rounded-lg w-[500px] max-h-[80vh] overflow-y-auto relative">
                <button
                    className="absolute top-2 right-2 text-white text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
