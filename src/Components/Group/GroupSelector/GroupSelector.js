import React, { useState, useEffect, useRef } from "react"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"
import PostViewer from "../../PostsViewer/PostViewer"
import CreateClan from "./../../CreateClan/CreateClan"
import { connect } from "react-redux"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import CreatePost from "../CreatePost"

function GroupSelector(props) {
  const [selectedClan, setSelectedClan] = useState(props.clans[0].clan_id)
  const [showPosts, setShowPosts] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  function handleSelectorChange(event) {
    switch (event.target.value) {
      case "":
        setShowPosts(false)
        setOpenModal(true)
        setSelectedClan(event.target.value)
        break
      default:
        setOpenModal(false)
        setShowPosts(true)
        setSelectedClan(event.target.value)
    }
  }

  const clansList = props.clans.map((clan, i) => {
    return (
      <option key={clan.name} value={clan.clan_id}>
        {clan.name}
      </option>
    )
  })

  function handleClanView() {
    props.history.push(`group/${selectedClan}`)
  }

  return (
    <div>
      <CreateClan open={openModal} />
      <FormControl>
        <NativeSelect
          value={selectedClan}
          onChange={handleSelectorChange}
          name="clans"
        >
          {clansList}
          <option value="">+ Create a Clan</option>
        </NativeSelect>
      </FormControl>
      {selectedClan > 0 ? (
        <div style={{ marginTop: "10px" }}>
          <Button
            onClick={handleClanView}
            variant="contained"
            size="small"
            color="primary"
            style={{ marginRight: "10px" }}
          >
            View Clan
          </Button>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            size="small"
            color="primary"
          >
            Create a post
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Create a post</DialogTitle>
            <CreatePost
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              getClan={props.getClan}
            />
          </Dialog>
        </div>
      ) : null}
      <div>{showPosts && <PostViewer id={selectedClan} />}</div>
    </div>
  )
}

export default connect()(withRouter(GroupSelector))
