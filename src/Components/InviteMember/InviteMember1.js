import React, { useState, useEffect } from "react"
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

function InviteMember(props) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(props.modalInfo.open)


    return () => {
      setOpen(false)
    }
  }, [props.modalInfo.open])
  
  function handleClose() {
    setOpen(false)
  }

  if (props.modalInfo.user) {
    function checkIfMemberOrInvited(clan) {
      const result = {
        member: ``,
        invited: ``
      }
      try {
        axios.get(`/api/clan/${clan.clan_id}/members`).then(res => {
          console.log(`THIS CLAN MEMBER `, res)
          const matchId = res.data.map(clanMember => {
            if (clanMember.user_id === props.modalInfo.user.user_id) {
              return true
            } else {
              return false
            }
          })
          if (matchId.indexOf(true) !== -1) {
            result.member = true
          } else {
            result.member = false
          }
        })
        return result
      } catch (error) {
        console.log(
          `there was an error processing the user-clan & invitation matching: ${error}`
        )
      }
    }
    const clansDisplay = props.registeredClans.map( clan => {
      const result = checkIfMemberOrInvited(clan)
      if (result.member) {
        console.log(result)
        if (!result.member && !result.invited) {
          return (
            <FormControlLabel
              control={<Checkbox value={clan.name} />}
              key={clan.name}
              label={clan.name}
            />
          )
        } else if (result.invited) {
          return (
            <>
              <FormControlLabel
                disabled
                control={<Checkbox value={clan.name} />}
                key={clan.name}
                label={clan.name}
              />
              <span>invitation already sent</span>
            </>
          )
        } else if (result.member) {
          return (
            <>
              <FormControlLabel
                disabled
                control={<Checkbox value={clan.name} />}
                key={clan.name}
                label={clan.name}
              />
              <span>user.name is already a member</span>
            </>
          )
        }
      }
    })
    const { user_id, username } = props.modalInfo.user
    return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="create-clan">
        <DialogTitle id="creat-clan">
          Invite <strong>{username}</strong> to a clan
        </DialogTitle>
        <DialogContent />
        <FormGroup>{clansDisplay}</FormGroup>
        <h1>{user_id}</h1>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            size="small"
            color="secondary"
          >
            invite
          </Button>
        </DialogActions>
      </Dialog>
    )
  } else {
    return null
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
