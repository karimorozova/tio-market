import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import styles from './Logo.module.scss';

const Logo = ({ className }) => {
  return (
    <h1 className={className}>
      <LogoIcon className={styles.iconLogo} />
    </h1>
  );
};

export default Logo;
