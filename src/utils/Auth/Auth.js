import auth0 from "auth0-js"
// import { withRouter } from "react-router-dom"

class Auth {
  constructor(history) {
    this.history = history
    this.userProfile = null
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      //Token is the access token and id_token will authenticate user,
      responseType: "token id_token",
      //this specifies the scope. openid includes audience, exp, etc. profile data includes user info like name, nickname, picture, etc.
      scope: "openid profile email"
    })
  }

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        this.history.push("/")
      } else if (err) {
        this.history.push("/")
        alert(`error: ${err.error}. check console for more information`)
        console.log(err)
      }
    })
  }

  setSession = authResult => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )

    localStorage.setItem("access_token", authResult.accessToken)
    localStorage.setItem("id_token", authResult.idToken)
    localStorage.setItem("expires_at", expiresAt)
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"))
    return new Date().getTime() < expiresAt
  }
  logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("id_token")
    localStorage.removeItem("expires_at")
    this.userProfile = null
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000"
    })
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token")
    if (!accessToken) {
      throw new Error("No access token found")
    }
    return accessToken
  }

  getProfile = cb => {
    if (this.userProfile) return cb(this.userProfile)
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) this.userProfile = profile
      cb(profile, err)
    })
  }
}

export default Auth
