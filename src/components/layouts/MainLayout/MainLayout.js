import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>MainLayout</h2>
      {children}
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
