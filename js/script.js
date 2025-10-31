document.addEventListener("DOMContentLoaded", function () {
	const modeToggler = document.querySelector(".dashboards__mode-toggler");

	const changeMode = () => {
		modeToggler.classList.toggle("active");
		let mode;

		if (modeToggler.classList.contains("active")) {
			modeToggler.setAttribute("aria-label", "Turn on light mode");
			document.body.classList.add("dark");
			mode = "dark";
		} else {
			modeToggler.setAttribute("aria-label", "Turn on dark mode");
			document.body.classList.remove("dark");
			mode = "light";
		}
		localStorage.setItem("theme", mode);
	};

	modeToggler.addEventListener("click", changeMode);
	window.addEventListener("DOMContentLoaded", () => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			document.body.classList.add("dark");
			modeToggler.classList.add("active");
		} else {
			document.body.classList.remove("dark");
			modeToggler.classList.remove("active");
		}
	});
});
