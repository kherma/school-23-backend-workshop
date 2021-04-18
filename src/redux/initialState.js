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
    postMode: 'all',
    currentPost: '',
  },
  users: {},
  posts: {
    data: [
      {
        id: '1',
        author: 'the.admin@example.com',
        created: new Date('2019-01-01T12:00:00Z'),
        updated: new Date('2019-02-01T12:00:00Z'),
        status: 'published',
        title: 'Welcome to our bulletin board!',
        text: 'Email me to register and get an account!',
        photo:
          'https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: null,
        phone: null,
        location: null,
      },
      {
        id: '2',
        author: 'the.admin@example.com',
        created: new Date('2019-01-01T12:00:00Z'),
        updated: new Date('2019-02-01T12:00:00Z'),
        status: 'published',
        title: 'Welcome to our bulletin board!',
        text: 'Email me to register and get an account!',
        photo: null,
        price: 100,
        phone: null,
        location: null,
      },
      {
        id: '3',
        author: 'the.admin@example.com',
        created: new Date('2019-01-01T12:00:00Z'),
        updated: new Date('2019-02-01T12:00:00Z'),
        status: 'published',
        title: 'Welcome to our bulletin board!',
        text: 'Email me to register and get an account!',
        photo: null,
        price: 99.99,
        phone: null,
        location: null,
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
