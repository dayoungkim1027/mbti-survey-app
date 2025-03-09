import axios from 'axios';
export const apiUrl = process.env.BACKEND_URL;
export const apiKey = process.env.API_KEY;

export default async function AskGemini(prompt) {
	const url = 'https://survey-backend-six.vercel.app/ask/gemini';
	const data = {
		text: prompt
	}
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': apiKey
	};
	
	try {
		const response = await axios.post(url, data, headers);
		// const response = await fetch('https://survey-backend-six.vercel.app/ask/gemini', options);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return await response.text();
	}	catch (e) {
		console.log('error')
	}
}