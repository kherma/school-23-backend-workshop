export const initialState = {
  user: {
    isLogged: false,
    userName: '',
    role: 'user',
  },
  users: {},
  posts: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
