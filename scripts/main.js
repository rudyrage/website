
let anchorElem = document.querySelectorAll(".nav-links a");
anchorElem.forEach(elem => {
	if (elem.href == location.href) {
		elem.className = "active"
	}
})