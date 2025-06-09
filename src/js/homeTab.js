import heroBackSvg from "../assets/icons/hero-back.svg";
import heroPersonPng from "../assets/icons/hero-person.png";

export default (function () {
	function createHomeTab() {
		const homeTabHtml = `
		<div class="hero-imgs">
			<img src="${heroBackSvg}" alt="hero-vector" class="hero-vector">
			<img src="${heroPersonPng}" alt="person-with-bag-and-ticket" class="hero-person">
		</div>
		<div class="home-content">
			<div class="hero-text">
				<p class="home-red">BEST DESTINATIONS AROUND THE WORLD</p>
				<h1>
					Travel, enjoy
					and live a new
					and full life
				</h1>
				<p>
					Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
					listening. Park gate sell they west hard for the.
				</p>
			</div>
		</div>
		`;

		return homeTabHtml;
	}
	return {
		createHomeTab,
	};
})();
