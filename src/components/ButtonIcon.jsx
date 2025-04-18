import React from "react";

const ButtonIcon = ({ icon: Icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group border-black-300 text-black-300 hover:bg-black-300/10 dark:border-accent-300 dark:text-accent-300 dark:hover:bg-accent-300/10 flex cursor-pointer items-center justify-center rounded border-[0.5px] p-2.5 transition-all ${className}`}
    >
      <div className="transition-transform duration-300">
        <Icon size={24} className="group-hover:animate-wiggle" />
      </div>
    </button>
  );
};

export default ButtonIcon;
