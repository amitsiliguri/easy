import React from "react";
import useButtonColor from "@/Hooks/useButtonColor"

export default function Button({
  className = "",
  processing,
  children,
  onClick,
  rounded,
  elevate,
  small,
  outlined,
  color
}) {
  const classFunction = () => {
    let classList =
      "inline-flex items-center uppercase font-bold text-xs tracking-widest transition ease-in-out duration-150";
    classList += rounded ? " rounded-full" : " rounded";
    classList += elevate ? " shadow-lg" : "";
    classList += small ? " px-2 py-1" : " px-4 py-3";
    classList += (className !== '') ? " " + className : "";
    classList += ' ' + useButtonColor(outlined,color)
    return classList
  };
  return (
    <button
      type="button"
      className={classFunction()}
      disabled={processing}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
