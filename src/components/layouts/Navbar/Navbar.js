import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { getIsLogged } from '../../../redux/userRedux';
import { changePostMode } from '../../../redux/postsRedux';

const Component = ({ className, children, isLogged, changeMode }) => {
  return (
    <nav className={clsx(className, styles.root)}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>
          <h1>Amazing Stuff</h1>
        </span>
      </div>
      <div className={styles.navLinksContainer}>
        <NavLink
          exact
          to="/"
          className={styles.navLink}
          onClick={() => changeMode('all')}
        >
          Home
        </NavLink>
        {isLogged && (
          <NavLink
            exact
            to="/"
            className={styles.navLink}
            onClick={() => changeMode('user')}
          >
            My posts
          </NavLink>
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
  changeMode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeMode: (arg) => dispatch(changePostMode(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Navbar, Component as NavbarComponent };
