// Components

// Utilities
import clsx from "clsx";
import { ChangeEvent } from "react";

// Interfaces
export interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  placeholder: string;
}

export function InputArea({
  className,
  placeholder,
  value,
  onChange,
  required = false,
}: InputAreaProps) {
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }
  return (
    <>
      <textarea
        className={clsx(
          "bg-black-300 rounded text-white-300 w-full px-4 py-2 text-sm focus-within:ring-2 ring-purple-600 outline-none placeholder:text-white-200",
          className
        )}
        name={value}
        onChange={handleChange}
        required={required}
        value={value}
        id={value}
        cols={30}
        rows={10}
        placeholder={placeholder}
      />
    </>
  );
}
