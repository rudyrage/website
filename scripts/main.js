class Nav {
	constructor(navElems) {
		this.navElems = document.querySelectorAll(navElems);
		this.displayAcvtiveLink()
	}

	displayAcvtiveLink() {
		this.navElems.forEach(elem => {
			if (elem.href === location.href) {
				elem.className = "active";
				console.log(elem.style.pointerEvent)
				elem.style.pointerEvents = "none";
			}
		})
	}
}


new Nav(".nav-links a")
