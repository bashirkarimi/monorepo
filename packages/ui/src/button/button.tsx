"use client";

import { HTMLAttributes } from "react";

const Button = ({
  children,
  className,
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your  app!`)}
    >
      {children}
    </button>
  );
};

export { Button };
