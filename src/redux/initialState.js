// User - holds info about current user and status
// App - holds application data
// ============ Move to DB when backend ready ============
// Users - list of all users
// Posts - list of all posts

export const initialState = {
  user: {
    isLogged: false,
    userName: '',
    role: 'user',
  },
  app: {
    navLinks: [],
  },
  users: {},
  posts: {
    postMode: 'all',
    currentPostID: '',
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
