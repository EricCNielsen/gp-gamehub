import React, { Component } from "react"
import "./App.css"

//routing props
import { withRouter } from "react-router-dom"

//components
import routes from "./routes"
import Nav from "./Components/Nav/Nav"
import Auth from "./utils/Auth/Auth"

//icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

// Setting redux store:
import { Provider } from "react-redux"
import store from "./ducks/store"

library.add(faSearch)

class App extends Component {
  render() {
    const auth = new Auth()
    const { history, location } = this.props
    return (
      <Provider store={store}>
        <div className="App">
          <Nav auth={auth} history={history} location={location} />
          {routes}
        </div>
      </Provider>
    )
  }
}

export default withRouter(App)
