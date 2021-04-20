import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PostsList.module.scss';
import clsx from 'clsx';
import { PostsListItem } from '../../common/PostsListItem/PostsListItem';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux';

const Component = ({ className, postsList, fetchPublishedPosts }) => {
  useEffect(() => {
    fetchPublishedPosts();
  }, [fetchPublishedPosts]);

  return (
    <div className={clsx(className, styles.root)}>
      {postsList.map((postDate) => (
        <PostsListItem key={postDate._id} postData={postDate} />
      ))}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  postsList: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
};

Component.defaultProps = {
  className: '',
  postsList: [],
};

const mapStateToProps = (state) => ({
  postsList: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as PostsList, Component as PostsListComponent };
