let express = require("express")
require("dotenv").config()

let MainRoutes = require("./routes/MainRoutes")

let server = express()
server.use(express.json())


MainRoutes(server)

let port = process.env.MYPORT || 8081;

server.listen(port, async () => {
   console.log("\nThe server run in port " + port);
})
