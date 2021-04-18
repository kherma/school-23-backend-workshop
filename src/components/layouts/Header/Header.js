import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Navbar } from '../Navbar/Navbar';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const Component = ({ className }) => {
  return (
    <header className={clsx(className, styles.root)}>
      <div className={styles.imageContaienr}></div>
      <Navbar />
    </header>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = (state) => {
//   someProps: reduxSelctor(state);
// };

// const mapDispatchToProps = (dispatch) => {
//   someAction: (arg) => dispatch(reduxActionCreator(arg));
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
