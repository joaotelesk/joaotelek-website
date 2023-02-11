import clsx from "clsx";

export interface InputAreaProps {
  value: string;
  onChange?: () => void;
  required?: boolean;
  className?: string;
}

export function InputArea({
  className,

  value,
  onChange,
  required = false,
}: InputAreaProps) {
  return (
    <>
      <textarea
        className={clsx(
          "bg-black-200 rounded text-white-300 w-full px-4 py-2 text-sm focus-within:ring-2 ring-purple-600 outline-none placeholder:text-white-200",
          className
        )}
        name={value}
        onChange={onChange}
        required={required}
        value={value}
        id={value}
        cols={30}
        rows={10}
      />
    </>
  );
}
