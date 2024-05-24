import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`text-accent-foreground rounded-full bg-accent px-12 py-2 text-xl font-medium hover:bg-accent/90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
