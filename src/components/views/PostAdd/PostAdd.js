import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles from './PostAdd.module.scss';
import clsx from 'clsx';
import { Redirect, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { getIsLogged, getUsername } from '../../../redux/userRedux';

const Component = ({ className, addNewPost, isLogged, username }) => {
  const [imgURL, setImgURL] = useState({ file: '' });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newPost = {
      ...data,
      id: new Date().getTime(),
      author: username,
      created: new Date(),
      updated: null,
      status: 'published',
      photo: imgURL.file.name,
    };
    addNewPost(newPost);
    history.push('/');
  };

  return (
    <div className={clsx(className, styles.root)}>
      {isLogged ? (
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputGroupHeader}>
            <span>
              {errors.title && <p>Title is required</p>}
              <input
                placeholder="Title min. 10 characters"
                type="text"
                className={styles.inputTitle}
                {...register('title', {
                  required: true,
                  minLength: 10,
                  maxLength: 50,
                })}
              />
            </span>
            <button className={styles.inputSubmit} type="submit" to="/">
              Submit
            </button>
          </div>
          <div className={styles.inputGroupMain}>
            <div className={styles.imageInputContainer}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className={styles.imgInput}
                {...register('photo')}
                onChange={(event) => {
                  setImgURL({
                    file: event.target.files.length
                      ? event.target.files[0]
                      : '',
                  });
                }}
              />
              <img
                src={imgURL.file && URL.createObjectURL(imgURL.file)}
                alt="test"
                className={styles.img}
              />
            </div>
            <div className={styles.detailsInputContainer}>
              {errors.email && <p>Email is required</p>}
              <input
                placeholder="Email"
                type="email"
                className={styles.inputRegular}
                {...register('email', { required: true })}
              />
              <input
                placeholder="Telephone"
                type="tel"
                pattern="[0-9]{9}"
                className={styles.inputRegular}
                {...register('phone', {
                  pattern: '[0-9]{9}',
                  valueAsNumber: false,
                })}
              ></input>
              <input
                placeholder="Location"
                type="text"
                className={styles.inputRegular}
                {...register('location')}
              />
              <input
                placeholder="Price"
                type="number"
                className={styles.inputRegular}
                {...register('price', { valueAsNumber: false })}
              />
            </div>
          </div>
          <div className={styles.inputGroupDescription}>
            {errors.text && <p>Description is required</p>}
            <textarea
              placeholder="Describe your offer - min. 20 characters"
              className={styles.inputDescription}
              {...register('text', { required: true, minLength: 20 })}
            ></textarea>
          </div>
        </form>
      ) : (
        <Redirect exact to="/not-found" />
      )}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  addNewPost: PropTypes.func,
  isLogged: PropTypes.bool,
  username: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
  username: getUsername(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (arg) => dispatch(addPost(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as PostAdd, Component as PostAddComponent };
