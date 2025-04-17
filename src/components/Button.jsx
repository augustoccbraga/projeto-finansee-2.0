import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  bgColor = "bg-black-200 dark:bg-white-100",
  textColor = "text-white-200 dark:text-black-200",
  hoverColor = "hover:bg-black-400 dark:hover:bg-white-300",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${hoverColor} inline-block cursor-pointer rounded-lg px-6 py-3 font-medium transition-all duration-150 ease-in-out active:shadow-[inset_0px_2px_4px_rgba(0,0,0,0.35)] dark:active:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.35)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
