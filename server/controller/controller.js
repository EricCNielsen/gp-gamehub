module.exports = {
    search: async (req, res) => {
        const db = req.app.get('db');
        const {search} = req.query
        console.log(111, search)

        
        let searchResultUsers = await db.get_users(search)
        let searchResultClans = await db.get_clans(search)
        let searchResults = [searchResultUsers, searchResultClans]
        
        // if (searchResults === []){
        //     return res.status(500).send('Nothing was found...')
        // }

        res.status(200).send(searchResults)
    },
    updateUser: async (req, res) => {
        try {
          const { user_id, username, email, location, picture, bio } = req.body;
          console.log(11, req.body);
          //   const { id } = req.session.user;
          const db = req.app.get("db");
          let user = await db.updateUser({
            user_id,
            username,
            email,
            location,
            picture,
            bio
          });
          console.log(22, user);
          //   user = user[0];
          //   req.session.user = user;
          res.status(200).send(user);
        } catch (error) {
          console.log("error updating user:", error);
          res.status(500).send("error updating user");
        }
      }
};
