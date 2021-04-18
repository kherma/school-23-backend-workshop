import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';
import { Header } from '../Header/Header';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Header className={styles.small} />
      <main className={styles.pageBody}>{children}</main>
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
