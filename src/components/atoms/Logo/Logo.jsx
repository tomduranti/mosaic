//sass
import styles from './_Logo.module.scss';

//assets
import logo from '@assets/logo/logo.svg';

export default function Logo() {
  return (
      <a href={`${import.meta.env.BASE_URL}home`} className={styles.logo}>
        <img className={styles.navbar__logo} src={logo} alt='logo' />
      </a>
    );
}