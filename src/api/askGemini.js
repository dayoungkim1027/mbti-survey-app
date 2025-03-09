export const apiUrl = process.env.BACKEND_URL;
export const apiKey = process.env.API_KEY;

export default async function AskGemini(prompt) {
	const url = 'https://survey-backend-six.vercel.app';
	const data = {
		text: prompt
	}
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': apiKey
		},
		body: JSON.stringify(data),
		mode: 'cors'
	};
	
	try {
		const response = await fetch(`${url}/ask/gemini`, options);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return await response.text();
	}	catch (e) {
		console.log('error')
	}
}