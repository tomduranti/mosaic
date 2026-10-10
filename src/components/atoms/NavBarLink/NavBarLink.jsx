//react
import { NavLink } from 'react-router';

//scss
import styles from './_NavBarLink.module.scss';

export default function NavBarLink({ to, path }) {
    return (
        <NavLink className={styles.link} to={to} aria-label={`go to ${to} page`}>
        {({ isActive }) => (
          <svg className={styles.link} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path className={ isActive ? styles['path--active'] : styles['path']}
              d={path}
            />
          </svg>
        )}
      </NavLink>
    )
}