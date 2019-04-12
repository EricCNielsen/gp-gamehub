import auth0 from "auth0-js"

class Auth {
  constructor() {
    this.logout = this.logout.bind(this)
  }
  login() {
    console.log("test")
    const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
    console.log(url)

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    console.log(window.location)
  }

  logout = () => {
    const {
      REACT_APP_DOMAIN,
      REACT_APP_CLIENT_ID,
      REACT_APP_LOGOUT_URL
    } = process.env
    const webAuth = new auth0.WebAuth({
      domain: REACT_APP_DOMAIN,
      clientID: REACT_APP_CLIENT_ID
    })

    webAuth.logout({
      returnTo: REACT_APP_LOGOUT_URL,
      client_id: REACT_APP_CLIENT_ID
    })
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
  // logout = () => {
  //   localStorage.removeItem("access_token")
  //   localStorage.removeItem("id_token")
  //   localStorage.removeItem("expires_at")
  //   this.userProfile = null
  //   this.auth0.logout({
  //     clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  //     returnTo: "http://localhost:3000"
  //   })
  // }

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
