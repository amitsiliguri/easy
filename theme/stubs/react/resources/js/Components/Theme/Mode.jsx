import React, { useState, useEffect } from "react";
import Button from "@/Components/Theme/Button";

const Mode = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    console.log(isDark);
  }
  useEffect(() => {
    toggleClass();
  }, [isDark])
  
  const toggleClass = () => {
    if (isDark) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}
  return (
    <>
      <Button type="button" onClick={toggleTheme}>
       Mode Switcher
      </Button>
    </>
  );
};

export default Mode;