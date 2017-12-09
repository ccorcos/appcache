const express = require("express")

const app = express()

app.get("*", function(req, res) {
	if (req.path === "/index.appcache") {
		res.sendFile("index.appcache", { root: __dirname })
	} else if (req.path === "/index.js") {
		setTimeout(() => {
			res.sendFile("index.js", { root: __dirname })
		}, 10000)
	} else if (req.path === "/old_index.js") {
		setTimeout(() => {
			res.sendFile("old_index.js", { root: __dirname })
		}, 10000)
	} else if (req.path === "/favicon.ico") {
		res.status(404).send("")
	} else {
		setTimeout(() => {
			res.sendFile("old_index.html", { root: __dirname })
		}, 0)
	}
})

app.listen(5000, () => console.log("Listening on port 5000"))
