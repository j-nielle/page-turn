"use client";

import { useCallback, useState } from "react";

export type ToggleStates<T extends string | number> = Record<T, boolean>;

export default function useToggleStates<T extends string | number>(
  initialState: ToggleStates<T>
) {
  const [states, setStates] = useState({ ...initialState });

  const toggleState = useCallback((id: T) => {
    setStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  return { states, toggleState };
}
