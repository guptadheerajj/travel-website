import heroPersonPng from "../../assets/icons/hero-person.png";

export default (function () {
	function createHomeTab() {
		const homeTabHtml = `
		<div class="home">
			<div class="home-content">
				<div class="hero-text">
					<p class="home-red">BEST DESTINATIONS AROUND THE WORLD</p>
					<h1>
						Travel, enjoy
						and live a new
						and full life
					</h1>
					<p>
						Pack lightly, wander freely through cities old and new.
						Guided by wonder we explore cultures. Trails open wide for you.
					</p>
				</div>
			</div>
			<div class="hero-imgs">
				<svg width="704" height="724" viewBox="0 0 704 724" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-vector">
					<path d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z" fill="#FFF1DA"/>
				</svg>
				<img src="${heroPersonPng}" alt="person-with-bag-and-ticket" class="hero-person">
			</div>
		</div>
		`;

		return homeTabHtml;
	}
	return {
		createHomeTab,
	};
})();
