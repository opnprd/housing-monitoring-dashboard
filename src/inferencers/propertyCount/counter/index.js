import { validEndings, dropAdjectives } from './words';
import { checkForNumber, calculateProperties } from './helpers';

// Calculate the units for an individual site
export function calculateUnits(description) {
	let units = null;
	
	let simplifiedDescription = description;

	for (let adjective of dropAdjectives ) {
		simplifiedDescription = simplifiedDescription.replace(adjective, '');
	}

	// Split into individual words
	const textSplit = simplifiedDescription.split(/\s+/g);
	
	for (let i = 0; i < textSplit.length; i++) {
		const wordCheck = checkForNumber(textSplit[i]);
		// Check word is a number
		if (!wordCheck) continue;

		// Check following word
		if (!textSplit[i + 1]) continue;

		// Remove non alpha numeric, lower case
		const nextWordFormat = textSplit[i + 1].replace(/\W/g, '').toLowerCase();
			
		// If the word is a valid ending, add the number to the total.
		if (validEndings.indexOf(nextWordFormat) != -1) {
			units += wordCheck;
		}
	}
	return units;
}

export function processEvents(events) {
	const summary = events.filter(x => x.type === 'planningPermission')
		.map(x => x.eventData.summary);
	const counts = summary.map(calculateUnits);

	const valid = counts.filter(x => x);
	const skipped = counts.length - valid.length;	

	return {
		valid,
		skipped,
		counts,
		properties: calculateProperties(valid),
		summary,
	}
}