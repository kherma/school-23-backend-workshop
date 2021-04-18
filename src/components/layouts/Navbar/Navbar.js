import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { getIsLogged } from '../../../redux/userRedux';

const Component = ({ className, children, isLogged }) => {
  return (
    <nav className={clsx(className, styles.root)}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>
          <h1>Amazing Stuff</h1>
        </span>
      </div>
      <div className={styles.navButtonsContainer}>
        {isLogged && (
          <>
            <NavLink exact to="/" className={styles.btnNavbar}>
              Home
            </NavLink>
            <NavLink exact to="/" className={styles.btnNavbar}>
              My posts
            </NavLink>
          </>
        )}
      </div>
      <div className={styles.loginBtnContainer}>{children}</div>
    </nav>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isLogged: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

const Container = connect(mapStateToProps)(Component);

export { Container as Navbar, Component as NavbarComponent };
