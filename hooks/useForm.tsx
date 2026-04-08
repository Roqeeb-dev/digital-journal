"use client";

import { useState } from "react";

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  function update<K extends keyof T>(key: K, value: T[K]) {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function reset() {
    setValues(initialValues);
  }

  return { values, update, reset };
}
