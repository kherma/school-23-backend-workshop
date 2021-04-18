import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsList.module.scss';
import clsx from 'clsx';
import { PostsListItem } from '../../common/PostsListItem/PostsListItem';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

const Component = ({ className, postsList }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {postsList.map((postData) => (
        <PostsListItem key={postData.id} postData={postData} />
      ))}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  postsList: PropTypes.array,
};

Component.defaultProps = {
  className: '',
  postsList: [],
};

const mapStateToProps = (state) => ({
  postsList: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export { Container as PostsList, Component as PostsListComponent };
