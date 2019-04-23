module.exports = {
  getInvitations: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { user_id } = req.session.user
      const invitations = await db.get_invitations({ user_id })
      res.status(200).send(invitations)
    } catch (err) {
      console.log(`there was an error getting the invitations: ${err}`)
    }
  }, 
  acceptInvite: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { id, clan_id } = req.body
      const { user_id } = req.session.user
      await db.delete_invitation({ id })
      const registeredClans = await db.add_user_to_clan({user_id, clan_id })
      res.status(200).send(registeredClans)
    } catch (err) {
      console.log(`there was an error accepting the invitation: ${err}`)
    }
  },
  createInvite: async (req, res) => {
    try {
      const db = req.app.get("db")
      const  invites  = req.body
      const { user_id } = req.session.user
      // console.log(invites)
      for(let propName in invites) {
        if(invites.hasOwnProperty(propName)) {
            let propValue = invites[propName];
            await db.create_invite({ clan_id: propValue.clan_id, inviter_id: user_id, invitee_id: propValue.user})
        }
      }
      res.sendStatus(200)
    } catch (err) {
      console.log(`there was an error creating the invitation: ${err}`)
    }
  }, 
  declineInvite: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { id } = req.params
      await db.delete_invitation({ id })
      res.sendStatus(200)
    } catch (err) {
      console.log(`there was an error deleting the invitation: ${err}`)
    }
  }
}