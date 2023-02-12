// Components

// Utilities
import clsx from "clsx";
import { ChangeEvent } from "react";

// Interfaces
export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

export function Input({
  className,
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <>
      <input
        className={clsx(
          "bg-black-300 rounded text-white-300 w-full px-4 py-3 text-xs focus-within:ring-2 ring-purple-600 outline-none placeholder:text-white-200",
          className
        )}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </>
  );
}
