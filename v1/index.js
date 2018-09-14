function updateAppCache() {
	console.log("updating application cache.")
	window.applicationCache.update()
}

window.applicationCache.addEventListener("error", error => {
	console.log("application cache error.")
	console.log(error)
})

window.applicationCache.addEventListener("updateready", () => {
	console.log("updateready application cache.")
	console.log("swapping application cache.")
	window.applicationCache.swapCache()
})

window.applicationCache.addEventListener("checking", () => {
	console.log("checking application cache.")
})

window.applicationCache.addEventListener("downloading", () => {
	console.log("downloading application cache.")
})

window.applicationCache.addEventListener("noupdate", () => {
	console.log("noupdate application cache.")
})

window.applicationCache.addEventListener("obsolete", () => {
	console.log("obsolete application cache.")
})

console.log("v1 js")
