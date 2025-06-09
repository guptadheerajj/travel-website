export default (function () {
	const tabSwitchAudio = document.querySelector("audio.tab-switch");

	// i am using event delegaton here to add event listener
	function bindTadSwitchEvent() {
		const nav = document.querySelector("nav");
		nav.addEventListener("click", (event) => {
			const target = event.target.closest("[data-tab]");
			if (!target) {
				return;
			}
			removeActiveTabClass();
			tabSwitchAudio.play();
			target.classList.add("active-tab");
		});
	}

	function removeActiveTabClass() {
		const activeTab = document.querySelector(".active-tab");
		activeTab.classList.remove("active-tab");
	}

	return { bindTadSwitchEvent };
})();
