import React, { useState } from "react";

const FloatingLabelInput = ({ label, type, name, value, required, error, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="mb-4 relative">
            <label
                htmlFor={name}
                className={`absolute top-1 left-3 bg-white transition-all px-1 rounded-md ${isFocused || value ? "text-royal-blue -mt-3 text-xs" : "text-dark-gray text-md"}`}
            >
                {label} {required && <span className="text-deep-crimson"> *</span>}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full h-12 text-md border ${error ? "border-red-500" : "border-dark-gray"} px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none`}
            />
            {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
        </div>
    );
};

export default FloatingLabelInput;