const axios = require("axios"),
  { REACT_APP_CLIENT_ID, REACT_APP_DOMAIN, CLIENT_SECRET } = process.env

module.exports = {
  auth0: async (req, res) => {
    // use code from query in payload for token
    const payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `${process.env.PROTOCOL}://${
        req.headers.host
      }/auth/callback`
    }
    // trade code for token
    let resWithToken = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    )

    // use token to get user data
    let resWithUserData = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
        resWithToken.data.access_token
      }`
    )
    // console.log('user data', resWithUserData.data);

    let { email, name, picture, sub } = resWithUserData.data

    const db = req.app.get("db")
    let foundUser = await db.find_user([sub])

    if (foundUser[0]) {
      req.session.user = foundUser[0]
    } else {
      let createdUser = await db.create_user([name, email, picture, sub])
      req.session.user = createdUser[0]

      res.send(req.session.user).redirect("/")
    }
  }
}
