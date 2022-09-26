import ExchangeRatesList from './components/ExchangeRatesList';
import styles from './ExchangeRates.module.scss';

const ExchangeRates = () => {
  return (
    <div className={styles.viewMore}>
      <ExchangeRatesList />

      <button type="button" className={styles.buttonMore}>
        VIEW MORE &gt;
      </button>
    </div>
  );
};

export default ExchangeRates;
