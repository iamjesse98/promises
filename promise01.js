let promise = new Promise((resolve, reject) => {
	let value = false
	value ? resolve("This value is true") : reject("This value is false")
})

promise.then(
	resolved => console.log(resolved),
	error => console.log(error)
)
