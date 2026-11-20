"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  themeMode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setThemeMode: (next: ThemeMode) => void;
  toggleLightDark: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "mranex-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyDocumentTheme(mode: ThemeMode, resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.dataset.themeMode = mode;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let initialMode: ThemeMode = "system";
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "system" || saved === "light" || saved === "dark") {
        initialMode = saved;
      }
    } catch {
      // Ignore storage access restrictions
    }

    const initialResolved: ResolvedTheme =
      initialMode === "system" ? getSystemTheme() : initialMode;

    setThemeModeState(initialMode);
    setResolvedTheme(initialResolved);
    applyDocumentTheme(initialMode, initialResolved);
    setMounted(true);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event: MediaQueryListEvent) => {
      setThemeModeState((currentMode) => {
        if (currentMode === "system") {
          const nextResolved: ResolvedTheme = event.matches ? "dark" : "light";
          setResolvedTheme(nextResolved);
          applyDocumentTheme("system", nextResolved);
        }
        return currentMode;
      });
    };

    mediaQuery.addEventListener("change", onSystemChange);
    return () => mediaQuery.removeEventListener("change", onSystemChange);
  }, []);

  const setThemeMode = (next: ThemeMode) => {
    const nextResolved: ResolvedTheme = next === "system" ? getSystemTheme() : next;
    setThemeModeState(next);
    setResolvedTheme(nextResolved);
    applyDocumentTheme(next, nextResolved);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors
    }
  };

  const toggleLightDark = () => {
    setThemeMode(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ themeMode, resolvedTheme, setThemeMode, toggleLightDark, mounted }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
