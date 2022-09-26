import styles from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Trade Forex & Stocks online</h2>
        <button className={styles.registrationButton} type="button">
          Register
        </button>
      </div>
    </section>
  );
};

export default MainSection;
