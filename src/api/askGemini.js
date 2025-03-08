export const apiUrl = process.env.BACKEND_URL;
export const apiKey = process.env.API_KEY;

export default async function AskGemini(prompt) {
	const url = 'https://survey-backend-h3b93sh56-dayoungkim1027s-projects.vercel.app';
	const data = {
		text: prompt
	}
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': apiKey,
			'Access-Control-Allow-Origin': url
		},
		body: JSON.stringify(data)
	};
	
	try {
		const response = await fetch(`${url}/ask/gemini`, options);
		return await response.text();
	}	catch (e) {
		console.log('error')
	}
}