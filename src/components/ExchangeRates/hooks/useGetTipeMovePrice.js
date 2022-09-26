import { useEffect, useState } from 'react';
import { useGetPrevValue } from '../../../helpers/useGetPrevValue';

const TypeMove = {
  DEFAULT: 'default',
  UP: 'up',
  DOWN: 'down',
};

const useGetTipeMovePrice = price => {
  const prevPrice = useGetPrevValue(price);
  const [typePrice, setTypePrice] = useState(TypeMove.DEFAULT);

  useEffect(() => {
    if (prevPrice === null) return;

    if (prevPrice > price) {
      setTypePrice(TypeMove.DOWN);
      return;
    }

    if (prevPrice < price) {
      setTypePrice(TypeMove.UP);
      return;
    }
  }, [prevPrice, price]);

  useEffect(() => {
    const idST = setTimeout(() => {
      setTypePrice(TypeMove.DEFAULT);
    }, 1500);

    return () => clearTimeout(idST);
  }, [prevPrice, price]);

  return typePrice;
};

export default useGetTipeMovePrice;
