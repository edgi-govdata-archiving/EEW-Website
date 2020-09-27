import { useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

/**
 * Hook, that returns the current dimensions of an HTML element.
 * Doesn't play well with SVG.
 * from https://github.com/muratkemaldar/using-react-hooks-with-d3/blob/17-finale/src/useResizeObserver.js
 */

const useResizeObserver = ref => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;