import { Small, Magnitude } from './words';

export function checkForNumber(text) {
	if (isNaN(Number(text)) == false) {
		return Number(text);
	} else {
		let a = text.toString().toLowerCase().split(/[\s-]+/);
		let n = 0;
		let g = 0;

		function feach(w) {
			let x = Small[w];
			if (x != null) {
					g = g + x;
			} else if (w == "hundred") {
					g = g * 100;
			} else {
					x = Magnitude[w];
					if (x != null) {
							n = n + g * x
							g = 0;
					} else {
							n = null;
					}
			}
		}

		a.forEach(feach);
		if (n != null) {
			return n + g;
		} else {
			return false;
		}
	}
}

export function calculateProperties(events) {
	const max = Math.max(...events);
	const min = Math.min(...events);

	if (events.length === 0) return null;
	if (min === max) return max;
	return [min, max];
}

