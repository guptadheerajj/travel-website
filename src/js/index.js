import "../css/normalize.css";
import "../css/style.css";
import "../css/fonts.css";
import tabSwitch from "./tabSwitch.js";

tabSwitch.bindTabSwitchEvent();

// renders home tab when user first visits the site i.e. on DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
	const homeTabBtn = document.querySelector('[data-tab = "home"]');
	homeTabBtn.click();
});
