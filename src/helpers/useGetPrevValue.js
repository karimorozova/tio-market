import { useEffect, useRef } from 'react';

export const useGetPrevValue = value => {
  const prevLineRef = useRef(null);

  useEffect(() => {
    prevLineRef.current = value;
  });

  return prevLineRef.current;
};
