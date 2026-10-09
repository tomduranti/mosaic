//react
import Logo from '@atoms/Logo/Logo.jsx';
import NavBarLink from '@atoms/NavBarLink/NavBarLink.jsx';
import UserProfilePicture from '@atoms/UserProfilePicture/UserProfilePicture.jsx';

//sass
import styles from './_NavBar.module.scss';

//functions
import { paths } from './NavBar.js';


export default function NavBar() {
  const links = paths.map(obj => (
    <li key={obj.to}>
      <NavBarLink to={obj.to} path={obj.d} />
    </li>
  ));

  return (
    <div className={styles.navbar}>
      <Logo />
      <nav aria-label='navigation links'>
        <ul className={styles.navbar__link_list}>{links}</ul>
      </nav>
      <UserProfilePicture />
    </div>
  );
}