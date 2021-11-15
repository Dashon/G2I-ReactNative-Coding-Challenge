const API_URL = "https://opentdb.com";

/**
* function to fetch trivia data
*/
export const getTriviaQuestions = async (amount = 10, type = "boolean", difficulty = "hard") => {
	difficulty = difficulty.toLowerCase();
	const url = `${API_URL}/api.php?amount=${amount}&type=${type}&difficulty=${difficulty}`;
	return fetch(url)
		.then(res => {
			if (res.status !== 200) {
				return res;
			}
			return res.json();
		})
		.then(data => {
			if (data.results) {
				return data.results;
			}
			return { errorCode: data.status };
		});
}