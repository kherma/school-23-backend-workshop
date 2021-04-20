import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsListItem.module.scss';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { parseDate } from '../../../utils/parseDate';

const Component = ({ className, postData }) => {
  const { _id, created, photo, price, title } = postData;
  const date = parseDate(created);
  return (
    <div className={clsx(className, styles.root)}>
      <p className={styles.date}>{date}</p>
      <div className={styles.dataContainer}>
        <div className={styles.imgContainer}>
          <Link to={`/post/${_id}`}>
            {photo ? (
              <img src={photo} alt="product" className={styles.img} />
            ) : (
              <span className={styles.img}></span>
            )}
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <Link to={`/post/${_id}`}>
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
};

Component.defaultProps = {
  className: '',
  postData: {},
};

export { Component as PostsListItem, Component as PostsListItemComponent };
