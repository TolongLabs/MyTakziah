import { useCallback, useEffect, useState } from "react";

const KEY = "mytakziah-theme";

type Theme = "light" | "dark";

/* Light by default rather than following the system. A judge opening this on a
   machine set to dark would otherwise see a palette nobody designed against,
   and the canvas and the deck are both light. Consistency across the three
   artifacts beats matching the operating system. */
function initial(): Theme {
  const stored = globalThis.localStorage?.getItem(KEY);
  return stored === "dark" ? "dark" : "light";
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
