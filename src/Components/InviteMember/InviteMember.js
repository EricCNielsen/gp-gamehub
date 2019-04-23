import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"

import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

class InviteMember extends Component {
  state = {
    open: false,
    userData: null,
    clansChecked: {}
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ open: this.props.modalInfo.open })
      this.handleGetUserData()
    }
  }

  handleGetUserData = async () => {
    const { user_id } = this.props.modalInfo.user
    try {
      const userData = await axios.get(`/api/user-membership/${user_id}`)
      await this.setState({ userData: userData.data })
    } catch (error) {
      console.log(`there was a proble getting the data: ${error}`)
    }
  }

  handleSubmit = async () => {
    await axios.post('/api/create-invite', this.state.clansChecked)
    this.handleClose()
  }

  handleClose = () => {
    this.setState({ open: false, clansChecked: {} })

  }

  clanCheckedForInvite(e, clan){
    const { user_id } = this.props.modalInfo.user
    let clansChecked = this.state.clansChecked
    clansChecked[clan.name] = {checked: e.target.checked,clan_id:clan.clan_id, user: user_id}
    this.setState({clansChecked})
  }

  render() {
    if (!this.state.userData) {
      return <div />
    }
    const { clans, invitations } = this.state.userData[0]
    const clansDisplay = this.props.registeredClans.map((clan) => {
      const alreadyMember = clans.findIndex(
        userClan => userClan.clan_id === clan.clan_id
      )
      const alreadyInvited = invitations.findIndex(
        userInvites => userInvites.clan_id === clan.clan_id
      )
      if (alreadyMember !== -1) {
        return (
          <div key={clan.clan_id}>
            <FormControlLabel
              disabled
              control={<Checkbox value={clan.name} />}
              key={clan.name}
              label={clan.name}
            />
            <span>{username} is already a member</span>
          </div>
        )
      } else if (alreadyInvited!== -1){
        return (
          <div key={clan.clan_id}>
          <FormControlLabel
          disabled
          control={<Checkbox value={clan.name} />}
          key={clan.name}
          label={clan.name}
          />
          <span>invitation already sent</span>
          </div>
        )
      } else {
        return (
          <div key={clan.clan_id}>
            <FormControlLabel
            control={<Checkbox value={clan.name} />}
            key={clan.name}
            label={clan.name}
            onChange={(e) => this.clanCheckedForInvite(e, clan)}
            />
          </div>
        )
      }
    })
    const { user_id, username } = this.props.modalInfo.user
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="create-clan"
      >
        <DialogTitle id="creat-clan">
          <p>
            Invite <b>{username}</b> to a clan
            </p>
        </DialogTitle>
        <DialogContent />
        <FormGroup>{clansDisplay}</FormGroup>
        <DialogActions>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            size="small"
            color="secondary"
          >
            invite
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateTopProps = reduxState => {
  const { registeredClans, user_id } = reduxState
  return {
    registeredClans,
    user_id
  }
}
export default connect(mapStateTopProps)(InviteMember)
