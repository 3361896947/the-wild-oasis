import { useEffect, useRef } from "react";

export default function useOutsideClick(handleFn, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handleFn();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handleFn, listenCapturing]
  );

  return ref;
}
