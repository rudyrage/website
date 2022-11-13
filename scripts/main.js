class Nav {
	constructor(navElems) {
		this.navElems = document.querySelectorAll(navElems);
		this.displayAcvtiveLink()
		this.updateUrl()
	}

	displayAcvtiveLink() {
		this.navElems.forEach(elem => {
			if (elem.href === location.href) {
				elem.className = "active";
				elem.href = "#";
			}
		})
	}

	removeUrlHash() {
		let customUrl = location.href.slice(0, -1);
		window.history.pushState(location.href, document.title, customUrl);
	}

	updateUrl() {
		this.navElems.forEach(elem => {
			elem.addEventListener('click', () => {
				if (location.href.includes("#")) {
					console.log("yes")
				}
			})
		})
	}
}


let nav = new Nav(".nav-links a")
