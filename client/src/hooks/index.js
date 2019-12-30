import { useState, useEffect } from 'react';

const getDimensions = () => {
  const { innerHeight, innerWidth } = window;
  return { innerHeight, innerWidth };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowDimensions];
};

