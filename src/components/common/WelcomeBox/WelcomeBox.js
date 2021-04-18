import React from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeBox.module.scss';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUsername } from '../../../redux/userRedux';

const Component = ({ className, userName }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h5>
        Hi <span className={styles.nameSpecial}>{userName}</span>! Have a nice
        day.
      </h5>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string,
};

const mapStateToProps = (state) => ({
  userName: getUsername(state),
});

// const mapDispatchToProps = (dispatch) => {
//   someAction: (arg) => dispatch(reduxActionCreator(arg));
// };

const Container = connect(mapStateToProps)(Component);

export { Container as WelcomeBox, Component as WelcomeBoxComponent };
