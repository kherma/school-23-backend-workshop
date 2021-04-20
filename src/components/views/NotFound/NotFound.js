import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';
import clsx from 'clsx';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>NotFound</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Component as NotFound, Component as NotFoundComponent };
