"use client"
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon:Icon,
  outline,
  small,
}) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg py-1 text-sm hover:opacity-80 transition w-full 
      ${outline ? "bg-white" : "bg-blue-500"} 
      ${outline ? "border-black" : "border-blue-500"} 
      ${outline ? "text-black" : "text-white"} 
      ${small ? 'py-1' : 'py-3'}
      ${small? 'text-sm' : 'text-base'}
      ${small? 'font-light' : 'font-semibold'}
      ${small? 'border-[1px]' : 'border-[1.5px]'}
      `}
    >
      {Icon && (
        <Icon size={24} className="absolute left-4 top-3"/> 
      )}
      <span className="text-xs font-medium">
      {label}

      </span>
    </button>
  );
};

export default Button;
