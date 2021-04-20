import React from 'react';
import PropTypes from 'prop-types';
import styles from './CallToActionBox.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Component = ({ className, text, linkTo }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Link to={`${linkTo}`} className={styles.link}>
        {text}
      </Link>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  linkTo: PropTypes.string,
};

export { Component as CallToActionBox, Component as CallToActionBoxComponent };
