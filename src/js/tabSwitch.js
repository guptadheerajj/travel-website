import DOMPurify from "dompurify";
import home from "./tabComponents/homeTab";
import destination from "./tabComponents/destinationTab";
import booking from "./tabComponents/bookingTab";

// Used Event Delegation to bind events to the tabs
export default (function () {
	const tabSwitchAudio = document.querySelector("audio.tab-switch");

	const allTabs = {
		home: home.createHomeTab(),
		destination: destination.createDestinationTab(),
		booking: booking.createBookingTab(),
	};

	function removeActiveTabClass() {
		const activeTab = document.querySelector(".active-tab");
		if (activeTab) {
			activeTab.classList.remove("active-tab");
		}
	}

	function appendTab(tabNode) {
		const main = document.querySelector(".main");
		main.innerHTML = "";
		main.insertAdjacentHTML("afterbegin", DOMPurify.sanitize(tabNode));
	}

	// event delegation
	function bindTabSwitchEvent() {
		const nav = document.querySelector("nav");
		nav.addEventListener("click", (event) => {
			// get closest ancestor tab element
			const target = event.target.closest("[data-tab]");
			if (!target) {
				return;
			}
			const tabName = target.dataset.tab;

			removeActiveTabClass();
			tabSwitchAudio.play();

			// appends the clicked tab to main element
			// allTabs object contain tab HTML markup
			appendTab(allTabs[tabName]);

			//highlights the clicked tab
			target.classList.add("active-tab");
		});
	}

	return { bindTabSwitchEvent };
})();
