const initialState = {
  user_id: 0,
  username: ``,
  email: ``,
  location: ``,
  picture: ``,
  bio: ``,
  exp: ``,
  ranking: ``
};

const UPDATE_USER = `UPDATE_USER`;

export function updateUser(user) {
  if (user[0]) {
    user = user[0];
  }
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      const {
        bio,
        username,
        location,
        picture,
        ranking,
        exp,
        email,
        user_id
      } = payload;
      return {
        ...state,
        bio,
        username,
        location,
        picture,
        ranking,
        email,
        user_id,
        exp
      };

    default:
      return state;
  }
}
