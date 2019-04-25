import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import ConsolesSelector from "../ConsolesSelector/ConsolesSelector"
import AddImage from "./AddIMage/AddImage"

import axios from "axios"

import Checkbox from "@material-ui/core/Checkbox"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

export default function CreateClan(props) {
  const [privateClan, setPrivateClan] = useState(false)
  const [competitive, setCompetitive] = useState(false)
  const [open, setOpen] = useState(false)
  const [clanName, setClanName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [bio, setBio] = useState("")
  const [gamingConsoles, setGamingConsoles] = useState([])

  useEffect(() => {
    if (props.open) {
      setOpen(props.open)
    }
    return () => {
      console.log(
        "cleaned up",
        gamingConsoles,
        avatar,
        privateClan,
        competitive,
        clanName,
        bio,
        open
      )
    }
  }, [gamingConsoles, avatar, props, privateClan, competitive, clanName, bio])

  function setClanAvatar(url) {
    setAvatar(url)
  }

  function handleGamingConsoles(consoleDb, selectedConsoles) {
    const consolesObj = consoleDb
      .filter(
        gameConsole =>
          gameConsole.name ===
          selectedConsoles[selectedConsoles.indexOf(gameConsole.name)]
      )
      .map(gameConsole => {
        return {
          console_id: gameConsole.id
        }
      })
    setGamingConsoles(consolesObj)
  }

  function handleClickOpen() {
    setOpen(!open)
    setClanName("")
    setBio("")
    setAvatar("")
    setCompetitive(false)
    setPrivateClan(false)
  }

  async function createClan() {
    try {
      if (clanName === "" || bio === "" || gamingConsoles[0] === "") {
        return alert("all fields must be completed before submitting")
      } else if (avatar === "") {
        return alert("Add an image before submitting")
      }
      handleClickOpen()
      await axios.post("/api/clan", {
        clanName,
        bio,
        avatar,
        competitive,
        privateClan,
        gamingConsoles
      })
    } catch (err) {
      console.log(`there was a problem creating the clan ${err}`)
    }
  }

  function handleClose() {
    if (props.setOpenModal) {
      props.setOpenModal(false)
    }
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="create-clan">
        <DialogTitle id="creat-clan">Create Clan</DialogTitle>
        <DialogContent>
          <AddImage setClanAvatar={setClanAvatar} />
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={privateClan}
                  onChange={() => setPrivateClan(!privateClan)}
                  value="privateClan"
                />
              }
              label="Private"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={competitive}
                  onChange={() => setCompetitive(!competitive)}
                  value="competitive"
                />
              }
              label="Competitive"
            />
          </FormGroup>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={clanName}
            onChange={event => setClanName(event.target.value)}
            label="Clan name"
            type="email"
            // fullWidth
          />
          <TextField
            id="standard-multiline-flexible"
            label="Bio"
            multiline
            value={bio}
            onChange={event => setBio(event.target.value)}
            rowsMax="4"
            fullWidth={true}
            margin="normal"
          />
          <ConsolesSelector handleGamingConsoles={handleGamingConsoles} />
        </DialogContent>
        <DialogActions>
          <Button onClick={createClan} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
