import { useCallback, useEffect, useState } from "react";

const KEY = "mytakziah-theme";

type Theme = "light" | "dark";

function initial(): Theme {
  const stored = globalThis.localStorage?.getItem(KEY);
  if (stored === "light" || stored === "dark") return stored;
  return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Minimal and deliberately not a context. One consumer, one class on the root,
 *  one localStorage key. A provider here would be ceremony. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    globalThis.localStorage?.setItem(KEY, theme);
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return { theme, toggle };
}
