module.exports = {
  checkCurrent: (req, res) => {
    const { user } = req.session
    if (!user) {
      res.redirect("/")
    }
    res.redirect("/dashboard")
  }
}
