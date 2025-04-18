import React from "react";

const ButtonAndIcon = ({
  children,
  icon: Icon,
  onClick,
  className = "",
  bgColor = "bg-black-200 dark:bg-white-100",
  textColor = "text-white-200 dark:text-black-200",
  hoverColor = "hover:bg-black-400 dark:hover:bg-white-300",
  iconSize = 20,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-150 ease-in-out ${bgColor} ${textColor} ${hoverColor} active:shadow-[inset_0px_2px_4px_rgba(0,0,0,0.35)] dark:active:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.35)] ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className="transition-transform duration-300">
        <Icon size={iconSize} className="group-hover:animate-wiggle" />
      </div>
    </button>
  );
};

export default ButtonAndIcon;
