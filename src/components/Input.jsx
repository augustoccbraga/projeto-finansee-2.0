import React, { useState } from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`peer bg-white-100 dark:bg-black-300 text-black-100 dark:text-white-100 border-white-300 dark:border-black-400 focus:border-accent-400 dark:focus:border-accent-300 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:outline-none ${
          type === "date" && !isFocused && !value
            ? "text-black-100/0 dark:text-white-100/0"
            : ""
        } ${className}`}
        placeholder=" "
        {...props}
      />
      <label
        className={`text-black-500 dark:text-white-500 peer-focus:text-accent-400 dark:peer-focus:text-accent-300 pointer-events-none absolute left-3 transition-all duration-200 ${value || isFocused ? "-translate-y-5 text-sm" : "translate-y-3"}`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
