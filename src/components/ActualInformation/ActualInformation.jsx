import styles from './ActualInformation.module.scss';
import { actualInformationList } from './constants';

const ActualInformation = () => {
  return (
    <section className={styles.actualInformation}>
      <ul className={styles.list}>
        {actualInformationList.map(({ id, Icon, text }) => (
          <li key={id} className={styles.item}>
            <Icon className={styles.icon} />
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActualInformation;
