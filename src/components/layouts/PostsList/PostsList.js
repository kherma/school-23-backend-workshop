import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsList.module.scss';
import clsx from 'clsx';
import { PostsListItem } from '../../common/PostsListItem/PostsListItem';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {[...Array(10)].map((_, index) => (
        <PostsListItem key={index} />
      ))}
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
  Component as PostsList,
  // Container as PostsList,
  Component as PostsListComponent,
};
