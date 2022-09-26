import cn from 'classnames';
import styles from './ExchangeRatesItem.module.scss';
import useGetTipeMovePrice from '../../hooks/useGetTipeMovePrice';

const ExchangeRatesItem = ({ instrument, price, sentiment, Icon }) => {
  const typePrice = useGetTipeMovePrice(price);

  return (
    <li className={styles.currencyItem}>
      <div className={styles.contentContainer}>
        <div className={styles.containerByTop}>
          <span className={styles.currency}>{instrument}</span>
          <span className={cn(styles.currencyPrice, styles[typePrice])}>
            {price}
          </span>
        </div>

        <span className={styles.currencyType}>{sentiment}</span>
      </div>

      {Icon && <Icon className={styles.icon} />}
    </li>
  );
};

export default ExchangeRatesItem;
