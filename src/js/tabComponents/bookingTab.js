import step1Icon from "../../assets/icons/step1.png";
import step2Icon from "../../assets/icons/step2.png";
import step3Icon from "../../assets/icons/step3.png";

export default (function () {
	function createBookingTab() {
		const bookingTabHtml = `
			<div class="booking">
				<div class="booking__head">Book Your Next Trip In 3 Easy Steps</div>
				<div class="booking__steps">
					<div class="booking__step1">
						<img src="${step1Icon}" alt="Choose Destination" class="step__img">
						<div class="step__title">Choose Destination</div>
						<div class="step__description">Browse through our curated list of amazing destinations and select your perfect getaway location.</div>
					</div>
					<div class="booking__step2">
						<img src="${step2Icon}" alt="Make Payment" class="step__img">
						<div class="step__title">Make Payment</div>
						<div class="step__description">Complete your booking with our secure payment system and receive instant confirmation details.</div>
					</div>
					<div class="booking__step3">
						<img src="${step3Icon}" alt="Reach Airport" class="step__img">
						<div class="step__title">Reach Airport on Selected Date</div>
						<div class="step__description">Arrive at the airport on your selected date and embark on your unforgettable travel adventure.</div>
					</div>
				</div>
			</div>
		`;
		return bookingTabHtml;
	}
	return {
		createBookingTab,
	};
})();
