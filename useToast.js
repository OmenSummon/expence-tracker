import { useState, useEffect } from "react";

export function useToast(duration = 2500) {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), duration);
    return () => clearTimeout(timer);
  }, [toast, duration]);

  return { toast, setToast, clearToast: () => setToast(null) };
}