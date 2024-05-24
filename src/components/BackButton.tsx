import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function BackButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-gray-foreground absolute bottom-8 left-8 flex w-fit items-center text-xl ${className}`}
      {...props}
    >
      <svg
        className={"mr-1 inline-block"}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path
          fill={"currentColor"}
          d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
        />
      </svg>
      {children}
    </button>
  );
}
