import "../css/normalize.css";
import "../css/style.css";
import "../css/fonts.css";
import tabSwitch from "./tabSwitch.js";
import themeManager from "./themeManager.js";

// renders home tab when user first visits the site i.e. on DOMContentLoaded event
// and binds event listeners
document.addEventListener("DOMContentLoaded", () => {
	// theme
	themeManager.initTheme();
	themeManager.bindThemeToggleEvent();

	// tab switch
	tabSwitch.bindTabSwitchEvent();
	const homeTabBtn = document.querySelector('[data-tab = "home"]');
	homeTabBtn.click();
});
