import styles from './ExchangeRatesSkeleton.module.scss';

const ExchangeRatesSkeleton = () => {
  return (
    <ul className={styles.viewMoreSkeleton}>
      {[1, 2, 3, 4, 5].map(count => (
        <li key={count} className={styles.loaderItem} />
      ))}
    </ul>
  );
};

export default ExchangeRatesSkeleton;
