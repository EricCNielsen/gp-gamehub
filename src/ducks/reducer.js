const initialState = {
  user_id: 0,
  username: ``,
  email: ``,
  location: ``,
  picture: ``,
  bio: ``,
  exp: ``,
  ranking: ``,
  owner_id: 0,
  clan_id: 0,
  clanBio: "",
  clanName: ``,
  clanAvatar: ``
};

const UPDATE_USER = `UPDATE_USER`,
  UPDATE_CLAN = `UPDATE_CLAN`;

export function updateUser(user) {
  if (user[0]) {
    user = user[0];
  }
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function updateClan(clan) {
  if (clan[0]) {
    clan = clan[0];
  }
  return {
    type: UPDATE_CLAN,
    payload: clan
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
    case UPDATE_CLAN:
      const { owner_id, clan_id, bio: clanBio, avatar: clanAvatar, name: clanName } = payload;
      return { ...state, owner_id, clan_id, clanBio, clanAvatar, clanName };
    default:
      return state;
  }
}
