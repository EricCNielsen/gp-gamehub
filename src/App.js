import React, { Component } from "react"
import "./App.css"
import routes from "./routes"
import Nav from "./Components/Nav/Nav"
import Auth from "./utils/Auth/Auth"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  render() {
    const auth = new Auth(this.props.history)
    return (
      <div className="App">
        <Nav auth={auth} />
        {routes}
      </div>
    )
  }
}

export default App
