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
    data: [
      {
        id: '1',
        author: 'John Doe',
        created: new Date('2021-04-04T12:00:00Z'),
        updated: new Date('2021-04-10T12:00:00Z'),
        status: 'published',
        title: 'Creative Photography',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        photo:
          'https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 100,
        email: 'john.doe@email.com',
        phone: 123456789,
        location: 'poland',
      },
      {
        id: '2',
        author: 'John Doe',
        created: new Date('2021-04-01T12:00:00Z'),
        updated: null,
        status: 'draw',
        title: 'Welcome to our bulletin board!',
        text: 'Email me to register and get an account!',
        photo: null,
        price: 100,
        email: 'john.doe@email.com',
        phone: null,
        location: null,
      },
      {
        id: '3',
        author: 'Mike Dylan',
        created: new Date('2021-04-05T12:00:00Z'),
        updated: new Date('2021-02-17T12:00:00Z'),
        status: 'published',
        title: 'I will teach you everything! SUPER SERIOUS!!!',
        text: 'Email me to register and get an account!',
        photo: null,
        price: null,
        email: 'mike.dylan@email.com',
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
