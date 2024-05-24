import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`text-accent-foreground w-fit rounded-full bg-accent px-8 py-2 text-xl font-medium hover:bg-accent-hover ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
