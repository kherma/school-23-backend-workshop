import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsListItem.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <p className={styles.date}>18.04.2021</p>
      <div className={styles.dataContainer}>
        <div className={styles.imgContainer}>
          <Link exact to="/post/1">
            <span className={styles.img}></span>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <Link exact to="/post/1">
            <h6 className={styles.title}>This is a title of a post</h6>
          </Link>
          <p className={styles.price}>
            <strong>$ 900</strong>
          </p>
        </div>
      </div>
    </div>
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
  Component as PostsListItem,
  // Container as PostsListItem,
  Component as PostsListItemComponent,
};
