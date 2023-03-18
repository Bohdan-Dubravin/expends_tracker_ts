import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

enum InputSize {
  SM = "SM",
  BASE = "BASE",
}

interface InputProps {
  placeholder: ComponentProps<"input">["placeholder"];
  name: ComponentProps<"input">["name"];
  onChange: ComponentProps<"input">["onChange"];
  onBlur: ComponentProps<"input">["onBlur"];
  type?: ComponentProps<"input">["type"];
  size?: keyof typeof InputSize;
  error?: boolean | undefined;
  label: string;
  errorMessage: string | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = InputSize.BASE, label, errorMessage, ...inputProps }, ref) => {
    const inputClasses = clsx(
      "block transition-colors text-gray-800 w-full bg-transparent outline-none border-b-2 rounded-t  placeholder-gray-400 focus:bg-orange1  border-orange3",
      {
        "py-2 px-4": size === InputSize.BASE,
        "py-3 px-5 text-xl": size === InputSize.SM,
        "border-red-500 ": errorMessage,
      }
    );

    const labelClasses = clsx("block font-bold text-sm mb-1 text-orange3", {
      // "py-2 px-4": size === InputSize.BASE,
      // "py-3 px-5 text-xl": size === InputSize.SM,
      "text-red-500": errorMessage,
    });

    return (
      <div className="relative pb-4 ">
        <label htmlFor={label} className={labelClasses}>
          {label}
        </label>
        <input ref={ref} {...inputProps} className={inputClasses} />
        <p className="text-red-500 text-xs mt-2 absolute -bottom-1 font-light">
          {errorMessage}
        </p>
      </div>
    );
  }
);
