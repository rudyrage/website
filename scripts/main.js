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
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> parent of 76e0073 (updated hash removing mechanism from url)
=======
>>>>>>> b63344f (main page)
}


new Nav(".nav-links a")
