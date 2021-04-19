import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles from './PostEdit.module.scss';
import clsx from 'clsx';
import { Redirect, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCurrentPost, editPost } from '../../../redux/postsRedux';
import { getIsLogged } from '../../../redux/userRedux';

const Component = ({ className, isLogged, currentPost, editExistingPost }) => {
  const [imgURL, setImgURL] = useState({ file: '' });
  const { email, location, phone, photo, price, text, title } = currentPost;
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let updatedPicture;

    if (data.photo.length) {
      updatedPicture = imgURL.file.name;
    } else if (photo) {
      updatedPicture = photo;
    } else {
      updatedPicture = null;
    }

    const newPost = {
      ...currentPost,
      ...data,
      photo: updatedPicture,
      updated: new Date(),
    };
    editExistingPost(newPost);
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
                defaultValue={title}
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
              edit
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
                src={imgURL.file ? URL.createObjectURL(imgURL.file) : photo}
                alt="test"
                className={styles.img}
              />
            </div>
            <div className={styles.detailsInputContainer}>
              {errors.email && <p>Email is required</p>}
              <input
                defaultValue={email}
                placeholder="Email"
                type="email"
                className={styles.inputRegular}
                {...register('email', { required: true })}
              />
              <input
                defaultValue={phone ? phone : ''}
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
                defaultValue={location ? location : ''}
                placeholder="Location"
                type="text"
                className={styles.inputRegular}
                {...register('location')}
              />
              <input
                defaultValue={price ? price : ''}
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
              defaultValue={text ? text : ''}
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
  isLogged: PropTypes.bool,
  currentPost: PropTypes.object,
  editExistingPost: PropTypes.func,
};

Component.defaultProps = {
  className: '',
  isLogged: false,
  currentPost: {},
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
  currentPost: getCurrentPost(state),
});

const mapDispatchToProps = (dispatch) => ({
  editExistingPost: (arg) => dispatch(editPost(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as PostEdit, Component as PostEditComponent };
