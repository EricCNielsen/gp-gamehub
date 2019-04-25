import React, { useState, useEffect, useRef } from "react"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"
import PostViewer from "../../PostsViewer/PostViewer"
import CreateClan from "./../../CreateClan/CreateClan"
import { connect } from "react-redux"

function GroupSelector(props) {
  const [selectedClan, setSelectedClan] = useState(props.clans[0].clan_id)
  // const [selectedClan, setSelectedClan] = useState("")
  const [showPosts, setShowPosts] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  // const { clans } = props
  // const prevClans = usePrevious(clans)

  // useEffect(() => {
  //   if (prevClans.clans !== clans) {
  //     setSelectedClan(clans[0].clan_id)
  //   }
  // }, [clans])

  // function usePrevious(value) {
  //   const ref = useRef()
  //   useEffect(() => {
  //     ref.current = value
  //   })
  //   return ref.current
  // }

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
        <Button
          onClick={handleClanView}
          variant="contained"
          size="small"
          color="primary"
        >
          View Clan
        </Button>
      ) : null}
      <div>{showPosts && <PostViewer id={selectedClan} />}</div>
    </div>
  )
}

// const mapStateToProps = reduxState => {
//   return {
//     clans: reduxState.registeredClans
//   }
// }

export default connect()(withRouter(GroupSelector))
