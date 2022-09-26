import { useEffect, useState } from 'react';
import { mockData } from '../../../mock';
import { dataIcons } from '../constants/dataIcons';
import { getRandomNumber } from '../helpers/getRandomNumber';

const useGetData = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [isFirstFetching, setIsFirstFetching] = useState(true);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const list = await mockData();

        const updateList = list.map(data => ({
          ...data,
          price: Number(data.price),
          Icon: dataIcons[data.instrument].Icon,
        }));

        setCurrencyList(updateList);
      } catch (error) {
        console.log('ERROR in useGetData =>', error);
      } finally {
        setIsFirstFetching(false);
      }
    };

    getCurrencies();
  }, []);

  useEffect(() => {
    let idST = null;

    const mockUpdateData = () => {
      idST = setTimeout(async () => {
        const list = await mockData();

        const updateList = list.map(data => ({
          ...data,
          price: data.price + getRandomNumber(),
          Icon: dataIcons[data.instrument].Icon,
        }));

        setCurrencyList(updateList);

        mockUpdateData();
      }, 3000);
    };

    mockUpdateData();

    return () => clearInterval(idST);
  }, []);

  return { currencyList, isFirstFetching };
};

export default useGetData;
