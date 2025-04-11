import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`border border-gray-300 px-4 py-2 rounded w-full ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input";
