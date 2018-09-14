const express = require("express")

const app = express()

const version = "v1"

app.use(express.static(__dirname + "/" + version))

app.get("*", function(req, res) {
	if (req.path === "/favicon.ico") {
		res.status(404).send("")
	} else {
		res.sendFile(version + "/index.html", { root: __dirname })
	}
})

app.listen(8003, () => console.log("Listening on port 8003"))
