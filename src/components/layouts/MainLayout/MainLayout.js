import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';
import { Header } from '../Header/Header';

import { connect } from 'react-redux';
import { getIsLogged } from '../../../redux/userRedux';

const Component = ({ className, children, isLogged }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {isLogged ? (
        <Header className={styles.small} />
      ) : (
        <Header className={styles.large} />
      )}

      <main className={styles.pageBody}>{children}</main>
    </div>
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

export { Container as MainLayout, Component as MainLayoutComponent };
