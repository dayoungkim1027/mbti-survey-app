export const apiUrl = process.env.BACKEND_URL;
export const apiKey = process.env.API_KEY;

export default async function AskGemini(prompt) {
	const url = `${apiUrl}/ask/gemini`;
	const data = {
		text: prompt
	}
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': apiKey,
			'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify(data)
	};
	
	try {
		const response = await fetch(url, options);
		return await response.text();
	}	catch (e) {
		console.log('error')
	}
}