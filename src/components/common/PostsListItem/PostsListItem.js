import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsListItem.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { parseDate } from '../../../utils/parseDate';

import { connect } from 'react-redux';
import { setCurrentPost } from '../../../redux/postsRedux';

const Component = ({ className, postData, setCurrentPostID }) => {
  const { id, created, updated, photo, price, title } = postData;
  const date = parseDate(created, updated);
  return (
    <div className={clsx(className, styles.root)}>
      <p className={styles.date}>{date}</p>
      <div className={styles.dataContainer}>
        <div className={styles.imgContainer}>
          <Link to={`/post/${id}`} onClick={() => setCurrentPostID(id)}>
            {photo ? (
              <img src={photo} alt="product" className={styles.img} />
            ) : (
              <span className={styles.img}></span>
            )}
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <Link to={`/post/${id}`} onClick={() => setCurrentPostID(id)}>
            <h6 className={styles.title}>{title}</h6>
          </Link>
          {price && (
            <p className={styles.price}>
              <strong>$ {price}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  postData: PropTypes.object,
  setCurrentPostID: PropTypes.func,
};

Component.defaultProps = {
  className: '',
  postData: {},
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentPostID: (arg) => dispatch(setCurrentPost(arg)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export { Container as PostsListItem, Component as PostsListItemComponent };
