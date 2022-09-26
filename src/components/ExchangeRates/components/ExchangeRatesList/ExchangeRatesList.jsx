import ExchangeRatesSkeleton from '../../../Skeletons/ExchangeRatesSkeleton';
import ExchangeRatesItem from '../ExchangeRatesItem/ExchangeRatesItem';
import useGetData from '../../hooks/useGetData';
import styles from './ExchangeRatesList.module.scss';

const ExchangeRatesList = () => {
  const { currencyList, isFirstFetching } = useGetData();

  return (
    <>
      {isFirstFetching && <ExchangeRatesSkeleton />}

      {!isFirstFetching && (
        <ul className={styles.currencyList}>
          {currencyList.map(({ instrument, price, sentiment, Icon }) => (
            <ExchangeRatesItem
              key={instrument}
              instrument={instrument}
              price={price}
              sentiment={sentiment}
              Icon={Icon}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ExchangeRatesList;
