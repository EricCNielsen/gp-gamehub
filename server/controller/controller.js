module.exports = {
  checkCurrent: (req, res) => {
    try {
      console.log(req.session.user)
      const { user } = req.session
      if (!user) {
        res.redirect("/")
      }
      res.redirect("/dashboard")
    } catch (err) {
      console.log(err)
    }
  },
  search: async (req, res) => {
    const db = req.app.get("db")
    const { search } = req.query
    console.log(111, search)

    let searchResultUsers = await db.get_users(search)
    let searchResultClans = await db.get_clans(search)
    let searchResults = [searchResultUsers, searchResultClans]

    // if (searchResults === []){
    //     return res.status(500).send('Nothing was found...')
    // }

    res.status(200).send(searchResults)
  },
  getUser: async (req, res) => {
    try {
      const { auth_id } = req.session.user
      const db = req.app.get("db")
      const user = await db.get_user(auth_id)
      res.status(200).send(user)
    } catch (err) {
      console.log(err)
    }
  }
}
