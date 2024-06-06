"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode className="text-xl hover:text-amber-500" />
        ) : (
          <MdDarkMode className="text-xl hover:text-amber-500" />
        ))}
    </button>
  );
}
