import { useCallback, useState, useLayoutEffect } from 'react';
import debounce from 'lodash.debounce';

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: 'x' in rect ? rect.x : rect.top,
    left: 'y' in rect ? rect.y : rect.left,
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export const useDimensions = (initialDimensions) => {
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = debounce(
        () => window.requestAnimationFrame(() => setDimensions({ ...getDimensionObject(node), isResized: true })),
        250,
      );
      measure();

      window.addEventListener('resize', measure);

      return () => {
        window.removeEventListener('resize', measure);
      };
    }
  }, [node]);

  return [ref, dimensions, node];
};
