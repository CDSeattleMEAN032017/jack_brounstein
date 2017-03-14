var express = require("express")
var path = require("path")

var app = express()

var PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})