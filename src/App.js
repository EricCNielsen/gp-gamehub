import React, { Component } from "react"
import "./App.css"
import routes from "./routes"
import Nav from "./Components/Nav/Nav"
import Auth from "./utils/Auth/Auth"

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
