module.exports = {
  search: async (req, res) => {
    const db = req.app.get("db")
    const { search } = req.query
    // console.log(111, search)
    let searchResults = {}

    searchResults.users = await db.get_users(search);
    searchResults.clans = await db.get_clans(search);
    res.status(200).send(searchResults);
  },
  checkCurrent: (req, res) => {
    try {
      // console.log(req.session.user)
      const { user } = req.session
      if (!user) {
        res.sendStatus(500);
      }
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
    }
  },
  getAuth: async (req, res) => {
    try {
      const { auth_id } = req.session.user;
      const db = req.app.get("db");
      const user = await db.get_auth(auth_id);
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
    }
  },
  getUser: (req, res) => {
    console.log(req.body)
    const db = req.app.get('db')
    const {id} = req.params

    db.get_user([id])
      .then(resp => {
        res.status(200).send(resp)
      console.log(11111, resp)
    })
    .catch(err => res.status(500).send(err))
  },
  updateUser: async (req, res) => {
    try {
      const { user_id, username, email, location, picture, bio, exp} = req.body;
      console.log(11, req.body);
      //   const { id } = req.session.user;
      const db = req.app.get("db");
      let user = await db.update_user({
        user_id,
        username,
        email,
        location,
        picture,
        bio,
        exp
      });
      
      res.status(200).send(user);
    } catch (error) {
      console.log("error updating user:", error);
      res.status(500).send("error updating user");
    }
  },
  logout: (req, res) => {
    req.session.destroy(function() {
      res.sendStatus(200);
    });
  },
  top5Users: async (req, res) => {
    const db = req.app.get("db");
    let gettop5users = await db.get_top5users();
    // console.log(gettop5users);
    res.status(200).send(gettop5users);
  }
};
