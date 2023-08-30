import React from "preact/compat";

import { css } from "styled-system/css";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        color: "indigo.500",
        backgroundColor: "cyan.50",
        padding: "2.5",
        borderRadius: "lg",
        _hover: {
          backgroundColor: "cyan.100",
        },
      })}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
