window.onload = function() {
	var btn = document.querySelector("button.sign-up");
	btn.onclick = function() {
		document.querySelector(".modal-container")
				.classList.add("active");
	}
}
