
let { Router } = require("express")
let router = Router()



router.get("/", (req, res) => {
   res.status(200).send("system")
})


router.post("/login", (req, res) => {
   res.status(200).send("login")
})


router.post("/register", (req, res) => {
   res.status(200).send("register")
})


module.exports = router