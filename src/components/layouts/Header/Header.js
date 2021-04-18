import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Navbar } from '../Navbar/Navbar';

import { connect } from 'react-redux';
import { getIsLogged, updateUser } from '../../../redux/userRedux';

const Component = ({ className, isLogged, updateUserData }) => {
  return (
    <header className={clsx(className, styles.root)}>
      <div className={styles.imageContaienr}></div>
      <Navbar>
        {isLogged ? (
          <button
            className={styles.btnLogStatus}
            onClick={() =>
              updateUserData({ isLogged: false, username: '', role: 'user' })
            }
          >
            Logout
          </button>
        ) : (
          <button
            className={styles.btnLogStatus}
            onClick={() =>
              updateUserData({
                isLogged: true,
                username: 'John Doe',
                role: 'user',
              })
            }
          >
            Login
          </button>
        )}
      </Navbar>
    </header>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  updateUserData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (arg) => dispatch(updateUser(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Header, Component as HeaderComponent };
