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
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
}

module.exports = {
  search: async (req, res) => {
    const db = req.app.get("db");
    const { search } = req.query;
    // console.log(111, search)
    let searchResults = {};

    searchResults.users = await db.get_users(search);
    searchResults.clans = await db.get_clans(search);
    res.status(200).send(searchResults);
  },
  // checkCurrent: (req, res) => {
  //   try {
  //     const { user } = req.session
  //     if (!user) {
  //       res.sendStatus(500)
  //     }
  //     res.status(200).send(user)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  getAuth: async (req, res) => {
    try {
      if (req.session.user[0]) {
        req.session.user = req.session.user[0];
      }
      const { auth_id } = req.session.user;
      const db = req.app.get("db");
      const user = await db.get_auth(auth_id);
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getUser: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_user([id])
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => res.status(500).send(err));
  },
  updateUser: async (req, res) => {
    try {
      const {
        user_id,
        username,
        email,
        location,
        picture,
        bio,
        exp
      } = req.body;
      const { session } = req;
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
    // console.log(gettop5users)
    res.status(200).send(gettop5users);
  },
  getConsoles: async (req, res) => {
    try {
      const db = req.app.get("db");
      const consoles = await db.get_consoles();
      res.status(200).send(consoles);
    } catch (error) {
      console.log("error getting consoles:", error);
      res.status(500).send("error getting consoles");
    }
  },
  createClan: async (req, res) => {
    try {
      const { clanName, bio, avatar, competitive, privateClan } = req.body;
      const { user_id } = req.session.user;
      const db = req.app.get("db");
      let clan = await db.create_clan({
        name: clanName,
        bio,
        avatar,
        competitive,
        private: privateClan,
        owner_id: user_id
      });
      const { clan_id } = clan[0];
      console.log(11111, clan);
      const newClan = await db.add_clan_owner_admin({
        user_id,
        clan_id
      });

      // console.log(clan, newClan)
    } catch (err) {
      console.log(`error creating clan: ${err}`);
    }
  },
  updateClan: async (req, res) => {
    try {
      const { clan_id, bio, url, name } = req.body;
      console.log("body of clan", req.body);
      const { session } = req;
      //   const { id } = req.session.clan;
      const db = req.app.get("db");
      let clan = await db.updateClan({
        clan_id,
        bio,
        avatar: url,
        name
      });
      console.log("updating clan", clan);
      res.status(200).send(clan);
    } catch (error) {
      console.log("error updating clan:", error);
      res.status(500).send("error updating clan");
    }
  },
  createPost: async (req, res) => {
    try {
      const { title, content, picture } = req.body;
      const { user_id } = req.session.user;
      const db = req.app.get("db");
      let date = formatDate(new Date());
      let post = await db.create_post([user_id, title, content, picture, date]);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  },
  getClan: (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;
    id = +id;
    db.get_clan([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => res.status(500).send(err));
  },
  getRegisteredClans: async (req, res) => {
    try {
      const db = req.app.get("db"),
        { user_id } = req.session.user;
      const registeredClans = await db.get_registered_clans({ user_id });
      res.status(200).send(registeredClans);
    } catch (err) {
      console.log(`There was an error getting registered clans, ${err} `);
    }
  },
  getUserRanking: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { id } = req.params;
      const { user_id } = req.session.user;
      const ranking = await db.get_user_ranking({ id, user_id });
      res.status(200).send(ranking);
    } catch (err) {
      console.log(`there was an error getting the user ranking: ${err}`);
    }
  },
  updateRanking: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { ranking, ranking_id } = req.body;
      const dbRanking = await db.update_ranking({ ranking, ranking_id });
      console.log(dbRanking);
      res.status(200).send(dbRanking);
    } catch (err) {
      console.log(`there was an error updating the user ranking: ${err}`);
    }
  },
  postRanking: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { newRanking, id } = req.body,
        { user_id } = req.session.user;
      const dbRanking = await db.create_ranking({
        ranking: newRanking,
        user_id: id,
        rater_id: user_id
      });
      res.status(200).send(dbRanking);
    } catch (err) {
      console.log(`there was an error posting the user ranking: ${err}`);
    }
  },
  getClanPosts: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { id } = req.params;
      const clanPosts = await db.get_clan_posts({ clan_id: id });
      res.status(200).send(clanPosts);
    } catch (err) {
      console.log(`there was an error getting the clan posts: ${err}`);
    }
  },
  getPost: async (req, res) => {
    try {
      const db = req.app.get("db");
      req.params.id = parseInt(req.params.id);
      // console.log(req.params);
      let { id } = req.params;
      let getpost = await db.get_post([id]);
      // console.log(getpost);
      console.log(getpost[0]);
      res.status(200).send(getpost[0]);
    } catch (err) {
      console.log(err);
    }
  },
  updatePost: async (req, res) => {
    try {
      console.log(req.body);
      const { content, post_id } = req.body;
      // console.log(content , post_id)
      const db = req.app.get("db");
      await db.update_post([content, post_id]);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const db = req.app.get("db");
      await db.delete_post([id]);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  }
};
