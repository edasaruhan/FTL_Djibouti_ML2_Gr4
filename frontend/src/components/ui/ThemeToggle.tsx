import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

type Theme = "light" | "dark";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for stored theme preference or use system preference
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) return storedTheme;

    // Check for system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  });

  // Apply theme when it changes
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove the old theme and add the new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Store the preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`
        fixed bottom-5 right-5 rounded-full p-3 z-50 
        ${
          theme === "light"
            ? "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
        }
      `}
      size="icon"
      variant="outline"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
