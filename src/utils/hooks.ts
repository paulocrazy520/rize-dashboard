import { useCallback, useEffect, useMemo, useState } from "react";

export function useWindowEventListener<K extends keyof WindowEventMap>(
  key: K,
  cb: (ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions | undefined
) {
  useEffect(() => {
    window.addEventListener(key, cb, options);
    return () => window.removeEventListener(key, cb, options);
  });
}

// overloads cannot be exported
export function useWindowExtensionEventListener(
  key: string,
  cb: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | undefined
) {
  useEffect(() => {
    window.addEventListener(key, cb, options);
    return () => window.removeEventListener(key, cb, options);
  });
}

export const useRefresh = () => {
  const [refreshIndex, setRefreshIndex] = useState(0);
  const refresh = useCallback(() => {
    setRefreshIndex((index) => index + 1);
  }, []);
  return useMemo(() => ({ refreshIndex, refresh }), [refreshIndex]);
};
