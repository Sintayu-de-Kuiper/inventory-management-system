import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-accent text-primary rounded-full px-8 py-2 text-xl font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
