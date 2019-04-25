import React, { Component } from "react"
import { connect } from "react-redux"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Badge from "@material-ui/core/Badge"
import IconButton from "@material-ui/core/IconButton"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import axios from "axios"
import {
  updateRegisteredClans,
  incrementToUpdateListFn
} from "../../../ducks/reducer"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Fab from "@material-ui/core/Fab"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    Fab: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: "red",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    }
  },
  typography: { useNextVariants: true }
})

class Notification extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      invites: [],
      notificationNumber: ``
    }
  }

  componentDidMount() {
    this.handleInvitations()
  }

  handleInvitations = async () => {
    try {
      let { notificationNumber } = this.state
      const invites = await axios.get(`/api/invites/`)
      if (notificationNumber === ``) {
        notificationNumber = invites.data.length
      }
      this.setState({
        ...this.state,
        invites: invites.data,
        notificationNumber
      })
    } catch (error) {
      console.log(`unable to get invites: ${error}`)
    }
  }

  notificationBellOpen = () => {
    this.setState({ open: true, notificationNumber: 0 })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleListItemClick = value => {
    this.props.onClose(value)
  }

  handleInvitationAction = async (id, clan_id, action, i) => {
    try {
      let { invites } = this.state
      invites.splice(i, 1)
      this.setState({
        invites
      })
      if (action) {
        const registeredClans = await axios.put("/api/accept-invite", {
          id,
          clan_id
        })
        console.log(registeredClans.data)
        this.props.incrementToUpdateListFn()
        this.props.updateRegisteredClans(registeredClans.data)
      } else {
        await axios.delete(`/api/decline-invite/${id}`)
      }
    } catch (error) {
      console.log(
        `there was a problem processing invitation response: ${error}`
      )
    }
  }

  render() {
    const inviteDisplay = this.state.invites.map((invite, i) => {
      const { username, name, id, clan_id } = invite
      return (
        <ListItem key={id}>
          <p>
            {username} is inviting you to join <strong>{name}</strong> clan
          </p>
          <MuiThemeProvider theme={theme}>
            <Fab
              size="small"
              onClick={() => this.handleInvitationAction(id, clan_id, true, i)}
              aria-label="Add"
            >
              <CheckIcon />
            </Fab>
          </MuiThemeProvider>
          <Fab
            size="small"
            onClick={() => this.handleInvitationAction(id, clan_id, false, i)}
            aria-label="Add"
          >
            <CloseIcon />
          </Fab>
        </ListItem>
      )
    })
    return (
      <div>
        <div>
          <IconButton
            color="inherit"
            variant="contained"
            onClick={this.notificationBellOpen}
          >
            <Badge
              badgeContent={this.state.notificationNumber}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="confirmation-dialog-title">
            Clan invitations
          </DialogTitle>
          <DialogContent>
            {this.state.invites.length === 0 ? (
              <div>
                <span
                  style={{
                    fontSize: "3em"
                  }}
                  role="img"
                  aria-label="emoji-Oh well.."
                >
                  🤷‍♂️
                </span>
                <strong>You have no pending invitations! </strong>
                <h5>go make some friends...</h5>
              </div>
            ) : (
              <List>{inviteDisplay}</List>
            )}
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const { username, picture, user_id } = reduxState
  return {
    user_id,
    username,
    picture
  }
}

const mapDispatchToProps = {
  updateRegisteredClans,
  incrementToUpdateListFn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
