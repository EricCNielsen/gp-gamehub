const initialState = {
  username: ``,
  email: ``,
  location: ``,
  picture: ``,
  bio: ``,
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
      return {
        ...state,
        ...payload
      }

    default:
      return {
        username: ``,
        email: ``,
        location: ``,
        picture: ``,
        bio: ``,
        ranking: ``
      }
  }
}
