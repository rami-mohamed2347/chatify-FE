"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const AuthButtons: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
     flex
     justify-center
     rounded-xl
     m-auto
     px-3
     py-2
     text-sm
     font-semibold
     focus-visible:outline
     focus-visible:outline-2
     focus-visible:outline-offset-2
    `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-60",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-skyblue hover:bg-skyblue focus-visible:outline-skyblue"
      )}
    >
      {children}
    </button>
  );
};

export default AuthButtons;
