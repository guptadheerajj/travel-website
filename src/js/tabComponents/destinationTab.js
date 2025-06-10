import beach from "../../assets/icons/beach.png";
import paris from "../../assets/icons/paris.png";
import bangkok from "../../assets/icons/bangkok.png";
import destinationHero from "../../assets/icons/destination-hero.png";
import discountIcon from "../../assets/icons/20percentOff.svg";
import userTickIcon from "../../assets/icons/user-tick.svg";
import starIcon from "../../assets/icons/star.svg";

export default (function () {
	// these are dummy card data
	const destinations = [
		{
			cardImg: beach,
			cardTitle: "Nha Trang (Vietnam)",
			cardPrice: "750",
			cardSpanPrice: "900",
			cardDescription:
				"Beautiful coastal destination with pristine beaches and crystal clear waters. Perfect for relaxation and water activities.",
			cardRating: "4.9",
			cardUserCount: "1,022",
		},
		{
			cardImg: paris,
			cardTitle: "Paris (France)",
			cardPrice: "950",
			cardSpanPrice: "1,200",
			cardDescription:
				"The City of Light enchants with iconic landmarks like the Eiffel Tower, world-class museums, charming cafés, and romantic Seine river walks.",
			cardRating: "4.8",
			cardUserCount: "3,247",
		},
		{
			cardImg: bangkok,
			cardTitle: "Bangkok (Thailand)",
			cardPrice: "650",
			cardSpanPrice: "850",
			cardDescription:
				"Vibrant capital city blending ancient temples with modern skyscrapers, bustling street markets, authentic Thai cuisine, and rich cultural heritage.",
			cardRating: "4.6",
			cardUserCount: "2,891",
		},
		{
			cardImg: beach,
			cardTitle: "Nha Trang (Vietnam)",
			cardPrice: "750",
			cardSpanPrice: "900",
			cardDescription:
				"Beautiful coastal destination with pristine beaches and crystal clear waters. Perfect for relaxation and water activities.",
			cardRating: "4.9",
			cardUserCount: "1,022",
		},
		{
			cardImg: paris,
			cardTitle: "Paris (France)",
			cardPrice: "950",
			cardSpanPrice: "1,200",
			cardDescription:
				"The City of Light enchants with iconic landmarks like the Eiffel Tower, world-class museums, charming cafés, and romantic Seine river walks.",
			cardRating: "4.8",
			cardUserCount: "3,247",
		},
		{
			cardImg: bangkok,
			cardTitle: "Bangkok (Thailand)",
			cardPrice: "650",
			cardSpanPrice: "850",
			cardDescription:
				"Vibrant capital city blending ancient temples with modern skyscrapers, bustling street markets, authentic Thai cuisine, and rich cultural heritage.",
			cardRating: "4.6",
			cardUserCount: "2,891",
		},
		{
			cardImg: beach,
			cardTitle: "Nha Trang (Vietnam)",
			cardPrice: "750",
			cardSpanPrice: "900",
			cardDescription:
				"Beautiful coastal destination with pristine beaches and crystal clear waters. Perfect for relaxation and water activities.",
			cardRating: "4.9",
			cardUserCount: "1,022",
		},
		{
			cardImg: paris,
			cardTitle: "Paris (France)",
			cardPrice: "950",
			cardSpanPrice: "1,200",
			cardDescription:
				"The City of Light enchants with iconic landmarks like the Eiffel Tower, world-class museums, charming cafés, and romantic Seine river walks.",
			cardRating: "4.8",
			cardUserCount: "3,247",
		},
		{
			cardImg: bangkok,
			cardTitle: "Bangkok (Thailand)",
			cardPrice: "650",
			cardSpanPrice: "850",
			cardDescription:
				"Vibrant capital city blending ancient temples with modern skyscrapers, bustling street markets, authentic Thai cuisine, and rich cultural heritage.",
			cardRating: "4.6",
			cardUserCount: "2,891",
		},
		{
			cardImg: paris,
			cardTitle: "Paris (France)",
			cardPrice: "950",
			cardSpanPrice: "1,200",
			cardDescription:
				"The City of Light enchants with iconic landmarks like the Eiffel Tower, world-class museums, charming cafés, and romantic Seine river walks.",
			cardRating: "4.8",
			cardUserCount: "3,247",
		},
	];

	function createDestinationTab() {
		const cardsHtmlArray = destinations.map((destination) => {
			return createCard(destination);
		});

		const allCardsHtml = cardsHtmlArray.join("");

		const destinationTabHtml = `
			<div class="destination">
				<img src=${destinationHero} alt="Destination Hero" class="destination-hero">
				<h1 class="destination__head">Top Destinations exclusively for you</h1>
				<div class="card-container">
					${allCardsHtml}
				</div>
			</div>
		`;

		return destinationTabHtml;
	}

	function createCard({
		cardImg,
		cardTitle,
		cardPrice,
		cardSpanPrice,
		cardDescription,
		cardRating,
		cardUserCount,
		discountImg = discountIcon, //this is the default discount value i.e. 20%
	}) {
		return `
			<div class="card">
				<img src="${discountImg}" alt="discount" class="card__discount">
				<div class="card__img">
					<img src="${cardImg}" alt="${cardTitle}">
				</div>
				<div class="card-text">
					<div class="card__title">${cardTitle}</div>
					<div class="card__price">$ ${cardPrice} <span>(${cardSpanPrice})</span></div>
					<p class="card__description">
						${cardDescription}
					</p>
				</div>
				<div class="card-bottom">
					<div class="card__rating">
						<img src=${starIcon} alt="star-icon">
						<span>${cardRating}</span>
					</div>
					<div class="card__user">
						<img src=${userTickIcon} alt="user-icon">
						<span>(${cardUserCount})</span>
					</div>
				</div>
			</div>
		`;
	}
	return {
		createDestinationTab,
		createCard,
	};
})();
