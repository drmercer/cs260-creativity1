window.onload = function() {
	var btn = document.querySelector("button.sign-up");
	var scrim = document.querySelector(".modal-container");

	// Show modal when button is clicked.
	btn.onclick = showModal;

	scrim.onclick = function(e) {
		// Only dismiss on click on scrim (not click on the modal itself)
		if (e.target === scrim) {
			hideModal();
		}
	}

	// Dismiss modal on ESC key
	document.addEventListener("keyup", function(e) {
		if (e.keyCode === 27) {
			hideModal();
		}
	});

	function showModal() {
		scrim.classList.add("active");
	}

	function hideModal() {
		scrim.classList.remove("active");
	}
}
