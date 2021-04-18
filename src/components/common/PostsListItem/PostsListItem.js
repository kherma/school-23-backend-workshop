import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsListItem.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelctor, reduxActionCreator } from '../../redux/store';

const Component = ({ className, postData }) => {
  const { id, created, updated, photo, price, title } = postData;

  const parseDate = (created, updated) => {
    if (updated) return updated.toLocaleDateString().replaceAll('/', '.');
    if (created) return created.toLocaleDateString().replaceAll('/', '.');
    return;
  };
  const date = parseDate(created, updated);
  return (
    <div className={clsx(className, styles.root)}>
      <p className={styles.date}>{date}</p>
      <div className={styles.dataContainer}>
        <div className={styles.imgContainer}>
          <Link to={`/post/${id}`}>
            {photo ? (
              <img src={photo} alt="product" className={styles.img} />
            ) : (
              <span className={styles.img}></span>
            )}
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <Link to={`/post/${id}`}>
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
