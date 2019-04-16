module.exports = {
  search: async (req, res) => {
    const db = req.app.get("db")
    const { search } = req.query
    // console.log(111, search)
    let searchResults = {}

    searchResults.users = await db.get_users(search)
    searchResults.clans = await db.get_clans(search)
    res.status(200).send(searchResults)
  },
  checkCurrent: (req, res) => {
    try {
      // console.log(req.session.user)
      const { user } = req.session
      if (!user) {
        res.sendStatus(500)
      }
      res.status(200).send(user)
    } catch (err) {
      console.log(err)
    }
  },
  getAuth: async (req, res) => {
    try {
      const { auth_id } = req.session.user
      const db = req.app.get("db")
      const user = await db.get_auth(auth_id)
      res.status(200).send(user)
    } catch (err) {
      console.log(err)
    }
  },
  getUser: (req, res) => {
    console.log(req.body)
    const db = req.app.get("db")
    const { id } = req.params

    db.get_user([id])
      .then(resp => {
        res.status(200).send(resp)
        console.log(11111, resp)
      })
      .catch(err => res.status(500).send(err))
  },
  updateUser: async (req, res) => {
    try {
      const { user_id, username, email, location, picture, bio, exp } = req.body
      const { session } = req
      console.log(11, req.body)
      //   const { id } = req.session.user;
      const db = req.app.get("db")
      let user = await db.update_user({
        user_id,
        username,
        email,
        location,
        picture,
        bio,
        exp
      })

      session.user = user
      res.status(200).send(user)
    } catch (error) {
      console.log("error updating user:", error)
      res.status(500).send("error updating user")
    }
  },
  logout: (req, res) => {
    req.session.destroy(function() {
      res.sendStatus(200)
    })
  },
  top5Users: async (req, res) => {
    const db = req.app.get("db")
    let gettop5users = await db.get_top5users()
    console.log(gettop5users)
    res.status(200).send(gettop5users)
  },
  getConsoles: async (req, res) => {
    try {
      const db = req.app.get("db")
      const consoles = await db.get_consoles()
      res.status(200).send(consoles)
    } catch (error) {
      console.log("error getting consoles:", error)
      res.status(500).send("error getting consoles")
    }
  },
  createClan: async (req, res) => {
    try {
      const { name, bio, avatar, competitive, privateClan } = req.body
      const { user_id } = req.user
      const db = req.app.get("db")
      const clan = await db.create_clan()
    } catch (err) {}
  }
}
