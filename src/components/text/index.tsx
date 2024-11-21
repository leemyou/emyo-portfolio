import React, { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  fontSize?: 12 | 16 | 18 | 20 | 24 | 32;
  fontWeight?: "normal" | "light" | "bold" | "extraBold";
  color?: "defalut" | "lighter" | "primary";
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  color = "defalut",
  fontSize = 16,
  fontWeight = "normal",
  className = "",
}) => {
  const fontSizeClasses: Record<number, string> = {
    12: "text-sm",
    16: "text-base",
    18: "text-lg",
    20: "text-xl",
    24: "text-2xl",
    32: "text-3xl",
  };

  return (
    <p
      className={`
      ${fontSizeClasses[fontSize] || "text-base"} 
      font-${fontWeight}
      ${color === "primary" && "text-primary"}
      ${color === "lighter" ? "text-grey-100" : "text-grey"}
      dark: ${color !== "primary" && "text-whi"}
      leading-none
      ${className}
    `}
    >
      {children}
    </p>
  );
};
