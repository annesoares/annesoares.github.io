document.addEventListener("DOMContentLoaded", function() {
	var pattern = Trianglify({
			width: window.innerWidth,
			height: window.innerHeight
		});
		document.body.appendChild(pattern.canvas());
});
