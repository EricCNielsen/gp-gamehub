module.exports = {
  createClan: async (req, res) => {
    try {
      const { clanName, bio, avatar, competitive, privateClan } = req.body
      const { user_id } = req.session.user
      const db = req.app.get("db")
      let clan = await db.create_clan({
        name: clanName,
        bio,
        avatar,
        competitive,
        private: privateClan,
        owner_id: user_id
      })
      const { clan_id } = clan[0]
      console.log(11111, clan)
      const newClan = await db.add_clan_owner_admin({
        user_id,
        clan_id
      })
      // console.log(clan, newClan)
    } catch (err) {
      console.log(`error creating clan: ${err}`)
    }
  },
  getRegisteredClans: async (req, res) => {
    try {
      const db = req.app.get("db"),
        { user_id } = req.session.user
      const registeredClans = await db.get_registered_clans({ user_id })
      res.status(200).send(registeredClans)
    } catch (err) {
      console.log(`There was an error getting registered clans, ${err} `)
    }
  },
  getMembers: async (req, res) => {
    try {
      const db = req.app.get("db"),
        { id } = req.params,
        members = await db.get_clan_members(id)
      res.status(200).send(members)
    } catch (err) {
      console.log("error getting members:", err)
    }
  },
  updateClan: async (req, res) => {
    try {
      const { clan_id, bio, url, name } = req.body
      console.log("body of clan", req.body)
      const db = req.app.get("db")
      let clan = await db.update_clan({
        clan_id,
        bio,
        avatar: url,
        name
      })
      console.log("updating clan", clan)
      res.status(200).send(clan)
    } catch (error) {
      console.log("error updating clan:", error)
      res.status(500).send("error updating clan")
    }
  },
  getClan: (req, res) => {
    const db = req.app.get("db")
    let { id } = req.params
    id = +id
    db.get_clan([id])
      .then(resp => {
        res.status(200).send(resp)
      })
      .catch(err => res.status(500).send(err))
  }
}
