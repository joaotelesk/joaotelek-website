import clsx from "clsx";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange?: () => void;
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
  return (
    <>
      <input
        className={clsx(
          "bg-black-200 rounded text-white-300 w-full px-4 py-2 text-sm focus-within:ring-2 ring-purple-600 outline-none placeholder:text-white-200"
        )}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}
