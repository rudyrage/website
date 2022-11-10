
// let lightMode = localStorage.getItem('lightMode');

// if (lightMode == "true") {
// 	addLightMode()
// }

// document.querySelector('.toggle-button').addEventListener('click', () => {
// 	lightMode = localStorage.getItem('lightMode')

// 	if (lightMode == "true") {
// 		removeLlightMode();
// 	} else {
// 		addLightMode();
// 	}
// });

// function addLightMode() {
// 	nestedToggleButton.style.marginLeft = "33px";
// 	lightMode = localStorage.setItem('lightMode', 'true')
// 	document.getElementsByTagName('body')[0].classList.add("light-mode")
// }

// function removeLlightMode() {
// 	nestedToggleButton.style.marginLeft = "2px";
// 	lightMode = localStorage.setItem("lightMode", "false");
// 	document.getElementsByTagName('body')[0].classList.remove('light-mode');
// }


/* 
	for active class in anchor tags in navigation link
*/
let activeLinkStr = '.nav-links > li > ';
let anchorElem = document.querySelectorAll(activeLinkStr+'a')

for (let elem of anchorElem) {
	elem.addEventListener('click', function() {
		let current = document.querySelector(activeLinkStr+'.active');
		if (current) {
			current.className = current.className.replace('active', '')
		} else {this.className = 'active'}
	})
}