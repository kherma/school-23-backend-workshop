import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import clsx from 'clsx';

import { parseDate } from '../../../utils/parseDate';
import { CallToActionBox } from '../../common/CallToActionBox/CallToActionBox';

import { connect } from 'react-redux';
import {
  fetchSinglePost,
  setCurrentPost,
  getCurrentPost,
} from '../../../redux/postViewRedux';
import { getUsername, getStatus } from '../../../redux/userRedux';

const Component = ({
  className,
  currentUser,
  currentStatus,
  setCurrentPostID,
  fetchSingle,
  currentPost,
  match,
}) => {
  useEffect(() => {
    setCurrentPostID(match.params.id);
    fetchSingle();
  }, [setCurrentPostID, match.params.id, fetchSingle]);

  const {
    _id,
    author,
    created,
    updated,
    photo,
    price,
    title,
    text,
    email,
    phone,
    location,
  } = currentPost;

  const date = parseDate(created, updated);
  const viewEdit = currentUser === author || currentStatus === 'admin';
  return (
    <article className={clsx(className, styles.root)}>
      <header className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h5 className={styles.title}>{title}</h5>
        </div>
        <div className={styles.btnContainer}>
          {viewEdit && (
            <CallToActionBox linkTo={`/post/${_id}/edit`} text="Edit Post" />
          )}
        </div>
      </header>
      <main className={styles.mainContainer}>
        <section className={styles.infoContainer}>
          {photo ? (
            <img src={photo} alt="product" className={styles.img} />
          ) : (
            <span className={styles.img}></span>
          )}
          <div className={styles.dataContainer}>
            <ul className={styles.listContainer}>
              <li className={styles.listItem}>Author: {author}</li>
              <li className={styles.listItem}>{`${
                created ? 'Last update:' : 'Post created'
              } ${date}`}</li>
              <li className={styles.listItem}> Email: {email}</li>
              {phone && <li className={styles.listItem}>Phone: {phone}</li>}
              {location && (
                <li className={styles.listItem}>Country: {location}</li>
              )}
            </ul>
            {price && <p className={styles.price}>$ {price}</p>}
          </div>
        </section>
        <section className={styles.descriptionContainer}>
          <p className={styles.description}>{text}</p>
        </section>
      </main>
    </article>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  currentPost: PropTypes.object,
  currentUser: PropTypes.string,
  currentStatus: PropTypes.string,
  setCurrentPostID: PropTypes.func,
  fetchSingle: PropTypes.func,
  match: PropTypes.object,
};

Component.defaultProps = {
  className: '',
  currentPost: {},
  currentUser: '',
  match: { params: { id: '' } },
};

const mapStateToProps = (state) => ({
  currentPost: getCurrentPost(state),
  currentUser: getUsername(state),
  currentStatus: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPostID: (arg) => dispatch(setCurrentPost(arg)),
  fetchSingle: () => dispatch(fetchSinglePost()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Post, Component as PostComponent };
