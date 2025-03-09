import { GoogleGenerativeAI } from '@google/generative-ai';
// import axios from 'axios';
// export const apiUrl = process.env.BACKEND_URL;
// export const apiKey = process.env.API_KEY;
const geminiApiKey = process.env.REACT_APP_GEMINI_API_KEY;
const modelName = process.env.REACT_APP_MODEL_NAME;


export default async function AskGemini(prompt) {
	try {
		const genAI = new GoogleGenerativeAI(geminiApiKey);
		const model = genAI.getGenerativeModel({ model: modelName });
		let result = await model.generateContent(prompt);
		console.log('.result.response.text(): ', result.response.text());
		return await result.response.text();
	}	catch (e) {
		console.log('error')
	}
}
