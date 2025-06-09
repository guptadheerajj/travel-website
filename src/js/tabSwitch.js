import DOMPurify from "dompurify";
import home from "./homeTab";
import destination from "./destinationTab";
import booking from "./bookingTab";
import login from "./loginTab";
import signup from "./signupTab";

export default (function () {
	const tabSwitchAudio = document.querySelector("audio.tab-switch");
	const allTabs = {
		home: home.createHomeTab(),
		destination: destination.createDestinationTab(),
		booking: booking.createBookingTab(),
		login: login.createLoginTab(),
		signup: signup.createSignupTab(),
	};

	// i am using event delegaton here to add event listener
	function bindTabSwitchEvent() {
		const nav = document.querySelector("nav");
		nav.addEventListener("click", (event) => {
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

	function appendTab(tabNode) {
		const main = document.querySelector(".main");
		main.innerHTML = "";
		main.insertAdjacentHTML("afterbegin", DOMPurify.sanitize(tabNode));
	}

	function removeActiveTabClass() {
		const activeTab = document.querySelector(".active-tab");
		if (activeTab) {
			activeTab.classList.remove("active-tab");
		}
	}

	return { bindTabSwitchEvent };
})();
