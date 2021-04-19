/* selectors */
export const getAll = ({ posts }) =>
  posts.data.filter(({ status }) => status === 'published');
export const getCurrentPost = ({ posts }) =>
  posts.data.find(({ id }) => id === posts.currentPostID);

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const SET_CURRENT_POST = createActionName('SET_CURRENT_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const setCurrentPost = (payload) => ({
  payload,
  type: SET_CURRENT_POST,
});
export const addPost = (payload) => ({
  payload,
  type: ADD_POST,
});
export const editPost = (payload) => ({
  payload,
  type: EDIT_POST,
});

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
        data: [action.payload],
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
    case SET_CURRENT_POST: {
      return {
        ...statePart,
        currentPostID: action.payload,
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [action.payload, ...statePart.data],
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
    default:
      return statePart;
  }
}
