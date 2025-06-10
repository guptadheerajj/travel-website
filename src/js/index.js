// import css files
import "../css/normalize.css";
import "../css/style.css";
import "../css/fonts.css";
import "../css/tab-styles/homeTab.css";
import "../css/tab-styles/destinationTab.css";

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

	// render home tab
	const homeTabBtn = document.querySelector('[data-tab = "home"]');
	homeTabBtn.click();
});
