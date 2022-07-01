class authController {
  async login(req, res) {
    try {
      res.set('Access-Control-Allow-Origin', '*');
      res.json("Server working")
    } catch (e) {

    }
  }
}

module.exports = new authController()