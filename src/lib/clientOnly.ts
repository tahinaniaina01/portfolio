import { useEffect, useState } from "react";

export function useClientOnly<T>(initialValue: T): T {
  const [value, setValue] = useState<T>(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return value;
}
