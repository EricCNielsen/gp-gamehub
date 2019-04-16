const initialState = {
  user_id: 0,
  username: ``,
  email: ``,
  location: ``,
  picture: ``,
  bio: ``,
  exp: ``,
  ranking: ``,
  console: ``
};

const UPDATE_USER = `UPDATE_USER`;

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("we in the reducer", payload);
  switch (type) {
    case UPDATE_USER:
      const {
        user_id,
        username,
        email,
        location,
        picture,
        bio,
        exp,
        ranking,
        console
      } = payload;
      return {
        ...state,
        user_id,
        username,
        email,
        location,
        picture,
        bio,
        exp,
        ranking,
        console
      };
    default:
      return state;
  }
}
