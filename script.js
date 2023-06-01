//your JS code here. If required.

function update() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}

update().then((text) => {
	document.getElementById("output").textContent = text;
});