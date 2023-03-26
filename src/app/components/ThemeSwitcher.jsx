"use client";

import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

export default ThemeSwitcher;
