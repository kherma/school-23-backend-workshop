import Axios from 'axios';

/* selectors */
export const getAll = (state) => {
  if (state.posts.postMode === 'all') {
    return state.posts.data;
  }

  if (state.posts.postMode === 'user')
    return state.posts.data.filter(
      ({ author }) => author === state.user.userName
    );
};

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const ADD_NEW_SUCCESS = createActionName('ADD_NEW_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const EDIT_POST = createActionName('EDIT_POST');
const CHANGE_POST_MODE = createActionName('CHANGE_POST_MODE');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const addNewSuccess = (payload) => ({ payload, type: ADD_NEW_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const editPost = (payload) => ({
  payload,
  type: EDIT_POST,
});
export const changePostMode = (payload) => ({
  payload,
  type: CHANGE_POST_MODE,
});

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const { posts } = getState();
    if (posts.data.length === 0 && posts.loading.active === true) {
      Axios.get('http://localhost:8000/api/posts')
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const addPhotoRequest = (data) => {
  return async (dispatch) => {
    dispatch(fetchStarted());
    try {
      let res = await Axios.post('http://localhost:8000/api/posts/add', data);
      dispatch(addNewSuccess(res.data));
    } catch (error) {
      dispatch(fetchError(error.message || true));
    }
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case ADD_NEW_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: [action.payload, ...statePart.data],
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case EDIT_POST: {
      const newPosts = statePart.data.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      );
      return {
        ...statePart,
        data: newPosts,
      };
    }
    case CHANGE_POST_MODE: {
      return {
        ...statePart,
        postMode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
