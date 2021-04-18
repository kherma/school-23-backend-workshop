import React from 'react';
import PropTypes from 'prop-types';
import styles from './CallToActionBox.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

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

// const mapStateToProps = (state) => {
//   someProps: reduxSelctor(state);
// };

// const mapDispatchToProps = (dispatch) => {
//   someAction: (arg) => dispatch(reduxActionCreator(arg));
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CallToActionBox,
  // Container as CallToActionBox,
  Component as CallToActionBoxComponent,
};
