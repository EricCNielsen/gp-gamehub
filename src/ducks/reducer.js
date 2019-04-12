const initialState = {
  user_id: 0,
  username: ``,
  email: ``,
  location: ``,
  picture: ``,
  bio: ``,
  experience: ``,
  ranking: ``
}

const UPDATE_USER = `UPDATE_USER`

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_USER:
    const {bio, username, location, picture, ranking, experience, email, user_id} = payload;
      return {
        ...state,
        bio, username, location, picture, ranking, email, user_id, experience
      }

    default:
      return state
  }
}
