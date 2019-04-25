function formatDate(date) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  var day = date.getDate()
  var monthIndex = date.getMonth()
  var year = date.getFullYear()

  return day + " " + monthNames[monthIndex] + " " + year
}

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
  getAuth: async (req, res) => {
    try {
      if (req.session.user[0]) {
        req.session.user = req.session.user[0]
      }
      const { auth_id } = req.session.user
      const db = req.app.get("db")
      const user = await db.get_auth(auth_id)
      res.status(200).send(user)
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
  },
  getUser: (req, res) => {
    const db = req.app.get("db")
    const { id } = req.params

    db.get_user([id])
      .then(user => {
        res.status(200).send(user)
      })
      .catch(err => res.status(500).send(err))
  },
  updateUser: async (req, res) => {
    try {
      const { user_id, username, email, location, picture, bio, exp } = req.body
      const { session } = req
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
    // console.log(gettop5users)
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
  createPost: async (req, res) => {
    try {
      const { title, content, picture } = req.body
      const { user_id } = req.session.user
      const db = req.app.get("db")
      let date = formatDate(new Date())
      let post = await db.create_post([user_id, title, content, picture, date])
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
    }
  },
  getUserRanking: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { id } = req.params
      const { user_id } = req.session.user
      const ranking = await db.get_user_ranking({ id, user_id })
      res.status(200).send(ranking)
    } catch (err) {
      console.log(`there was an error getting the user ranking: ${err}`)
    }
  },
  updateRanking: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { ranking, ranking_id } = req.body
      const dbRanking = await db.update_ranking({ ranking, ranking_id })
      console.log(dbRanking)
      res.status(200).send(dbRanking)
    } catch (err) {
      console.log(`there was an error updating the user ranking: ${err}`)
    }
  },
  postRanking: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { newRanking, id } = req.body,
        { user_id } = req.session.user
      const dbRanking = await db.create_ranking({
        ranking: newRanking,
        user_id: id,
        rater_id: user_id
      })
      res.status(200).send(dbRanking)
    } catch (err) {
      console.log(`there was an error posting the user ranking: ${err}`)
    }
  },
  getClanPosts: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { id } = req.params
      const clanPosts = await db.get_clan_posts({ clan_id: id })
      res.status(200).send(clanPosts)
    } catch (err) {
      console.log(`there was an error getting the clan posts: ${err}`)
    }
  },
  getPost: async (req, res) => {
    try {
      const db = req.app.get("db")
      req.params.id = parseInt(req.params.id)
      // console.log(req.params);
      let { id } = req.params
      let getpost = await db.get_post([id])
      // console.log(getpost);
      res.status(200).send(getpost)
    } catch (err) {
      console.log(err)
    }
  },
  updatePost: async (req, res) => {
    try {
      console.log(req.body)
      const { content, post_id } = req.body
      // console.log(content , post_id)
      const db = req.app.get("db")
      await db.update_post([content, post_id])
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
    }
  },
  deleteReply: async (req, res) => {
    try {
      console.log(req.params)
      const { id } = req.params
      const db = req.app.get("db")
      await db.delete_reply([id])
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
    }
  },
  createReply: async (req, res) => {
    try {
      console.log(11, req.body)
      const { user_id, content, parent_id } = req.body
      let date = formatDate(new Date())
      const db = req.app.get("db")
      await db.create_reply([content, user_id, parent_id, date])
      res.sendStatus(200)
      console.log("finish")
    } catch (err) {
      console.log(err)
    }
  },
  deletePost: async (req, res) => {
    try {
      const { id } = req.params
      const db = req.app.get("db")
      await db.delete_post([id])
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
    }
  },
  checkUserMembership: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { id } = req.params
      const userMembership = await db.check_user_clans_invitations({
        user_id: id
      })
      res.status(200).send(userMembership)
    } catch (err) {
      console.log(`there was an error checking user membership: ${err}`)
    }
  }
}
