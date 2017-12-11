const express = require("express")

const app = express()

const version = "v1"

app.get("*", function(req, res) {
	if (req.path === "/index.appcache") {
		res.sendFile(version + "/index.appcache", { root: __dirname })
	} else if (req.path === "/index.js") {
		res.sendFile(version + "/index.js", { root: __dirname })
	} else if (req.path === "/favicon.ico") {
		res.status(404).send("")
	} else {
		res.sendFile(version + "/index.html", { root: __dirname })
	}
})

app.listen(5001, () => console.log("Listening on port 5000"))
