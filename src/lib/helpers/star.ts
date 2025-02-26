export const getRating = (rate: number, maxRating: number = 5.00) => {
	let rating = rate;
	if (rating > maxRating) {
		rating = maxRating;
	}
	const ratingPercentage = (rating / maxRating) * 100;
	return ratingPercentage;
}