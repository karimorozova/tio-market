import useMedia from '../../hooks/useMedia';
import Logo from '../Logo/Logo';
import Langs from './components/Langs/Langs';
import Menu from './components/Menu';
import styles from './TopNavigation.module.scss';

const TopNavigation = () => {
  const { DESK } = useMedia();

  const goToRegistration = () => {};

  return (
    <section className={styles.topNavigation}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <Menu />
        {DESK && <Langs />}

        <div className={styles.containerDownMob}>
          <button
            className={styles.registrationButton}
            type="button"
            onClick={goToRegistration}
          >
            Register
          </button>
          {!DESK && <Langs />}
        </div>
      </div>
    </section>
  );
};

export default TopNavigation;
