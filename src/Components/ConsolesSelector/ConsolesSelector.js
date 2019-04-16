import React, { useState, useEffect } from "react"

import Chip from "@material-ui/core/Chip"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import axios from "axios"

export default function ConsolesSelector(props) {
  const [consoleDb, setConsoleDb] = useState({})
  const [consoles, setConsoles] = useState([]),
    [selectedConsoles, setSelectedConsoles] = useState([])

  const getConsoles = async () => {
    try {
      let db = await axios.get("/api/consoles")
      await setConsoleDb(db.data)
      const list = []
      for (let gameConsole of db.data) {
        list.push(gameConsole.name)
      }
      setConsoles([...list])
    } catch (err) {
      console.log(`error getting consoles: ${err}`)
    }
  }

  useEffect(() => {
    getConsoles()
  }, [])

  async function handleChange(event) {
    await setSelectedConsoles(event.target.value)
    props.handleGamingConsoles(consoleDb, event.target.value)
  }

  return (
    <div>
      <FormControl style={{ minWidth: "15em" }}>
        <InputLabel htmlFor="select-multiple-chip">
          Prefered Gaming console
        </InputLabel>
        <Select
          multiple
          value={selectedConsoles}
          onChange={handleChange}
          input={
            <Input
              style={{ display: "flex", flexWrap: "wrap" }}
              id="select-multiple-chip"
            />
          }
          renderValue={selected => (
            <div>
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          {consoles.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
