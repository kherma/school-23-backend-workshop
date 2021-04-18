import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import clsx from 'clsx';

import { WelcomeBox } from '../../common/WelcomeBox/WelcomeBox';
import { CallToActionBox } from '../../common/CallToActionBox/CallToActionBox';
import { PostsList } from '../../layouts/PostsList/PostsList';

import { connect } from 'react-redux';
import { getIsLogged } from '../../../redux/userRedux';

const Component = ({ className, isLogged }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {isLogged && (
        <>
          <section className={styles.headerSection}>
            <WelcomeBox />
            <CallToActionBox text={'new post'} linkTo={'/post/add'} />
          </section>
        </>
      )}
      <PostsList />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

// const mapDispatchToProps = (dispatch) => {
//   someAction: (arg) => dispatch(reduxActionCreator(arg));
// };

const Container = connect(mapStateToProps)(Component);

export { Container as Homepage, Component as HomepageComponent };
