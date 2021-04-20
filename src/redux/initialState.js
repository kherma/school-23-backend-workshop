export const initialState = {
  user: {
    isLogged: false,
    userName: '',
    role: 'user',
  },
  posts: {
    postMode: 'all',
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  postView: {
    currentPostID: '',
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};
