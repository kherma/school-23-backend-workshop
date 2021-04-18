/* selectors */
export const getIsLogged = ({ user }) => user.isLogged;
export const getUsername = ({ user }) => user.userName;
export const getStatus = ({ user }) => user.role;

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_USER = createActionName('UPDATE_USER');

/* action creators */
export const updateUser = (payload) => ({ payload, type: UPDATE_USER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...statePart,
        isLogged: action.payload.isLogged,
        userName: action.payload.username,
        role: action.payload.role,
      };
    }
    default:
      return statePart;
  }
}
