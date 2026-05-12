"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const STORAGE_KEY = "ankit-portfolio-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light"))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
