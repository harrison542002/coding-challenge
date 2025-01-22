"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

/**
 * Dark mode toggler component to toggle the theme
 */
const ModeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className="border rounded-full p-2 text-xl"
      onClick={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? <MdDarkMode /> : <MdWbSunny />}
    </button>
  );
};

export default ModeToggler;
