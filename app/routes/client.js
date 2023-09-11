const router = require("express").Router()

const clientController = require("../controller/clientController")

router.get("/list", function (req, res) {
    clientController.list(req, res)

})

router.post("/save", function (req, res) {
    clientController.save(req, res)
})

module.exports = router