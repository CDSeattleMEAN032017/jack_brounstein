var express = require("express")
var path = require("path")

var app = express()

var PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", function(request, response){
	var name = "Jack"

	response.render("index", {names: ["Jack", "Ray", "Kris"], age: 31})
})

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})