import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div>
      <div className={styles.navigationWrapper}>
        <NavLink to={routes.home} exact>
          <div className={styles.logoBox}></div>
        </NavLink>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to={routes.home}
              exact
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.search}
              exact
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
