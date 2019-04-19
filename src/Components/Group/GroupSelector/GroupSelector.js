import React, { useState } from "react"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"
import PostViewer from "../../PostsViewer/PostViewer"

function GroupSelector(props) {
  const [selectedClan, setSelectedClan] = useState(props.clans[0].clan_id)
  const [showPosts, setShowPosts] = useState(true)

  function handleChange(event) {
    if (event.target.value === "") {
      setShowPosts(false)
      setSelectedClan(event.target.value)
    } else {
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
      <FormControl>
        <NativeSelect value={selectedClan} onChange={handleChange} name="clans">
          {clansList}
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

export default withRouter(GroupSelector)
