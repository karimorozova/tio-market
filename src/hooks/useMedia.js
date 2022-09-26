import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
  const MOB = useMediaQuery({ query: '(max-width: 767px)' });
  const TABL = useMediaQuery({ query: '(min-width: 768px)' });
  const DESK = useMediaQuery({ query: '(min-width: 1024px)' });
  const HD = useMediaQuery({ query: '(min-width: 1920px)' });

  return { MOB, TABL, DESK, HD };
};

export default useMedia;
