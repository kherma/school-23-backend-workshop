import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const login = true;

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>
          <h1>Amazing Stuff</h1>
        </span>
      </div>
      <div className={styles.navButtonsContainer}>
        {login && (
          <>
            <button className={styles.btnNavbar}>Home</button>
            <button className={styles.btnNavbar}>My posts</button>
          </>
        )}
      </div>
      <div className={styles.loginBtnContainer}>
        {login ? (
          <button className={styles.btnLogStatus}>Logout</button>
        ) : (
          <button className={styles.btnLogStatus}>Login</button>
        )}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

// const mapStateToProps = (state) => {
//   someProps: reduxSelctor(state);
// };

// const mapDispatchToProps = (dispatch) => {
//   someAction: (arg) => dispatch(reduxActionCreator(arg));
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Navbar,
  // Container as Navbar,
  Component as NavbarComponent,
};
