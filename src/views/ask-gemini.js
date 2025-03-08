import styled from 'styled-components';
import askGemini from '../api/askGemini';
import { useState } from 'react';

const GeminiContainer = styled.div`
	padding: 0 1.5rem;
`

const Title = styled.h4`
	font-size: 18px;
	margin: 0;
`

const TextInput = styled.input`
	padding: .5rem;
	width: -webkit-fill-available;
	border: 1px solid #B4B4B8;
	border-radius: unset;
	height: 20px;
	border-radius: 7px;
`

const Answer = styled.p`
	min-height: 10px;
	max-height: 200px;
	padding: 1rem;
	overflow: scroll;
  color: #8967B3;
	margin-left: auto;
`

const NonAnswer = styled.p`
	min-height: 10px;
	max-height: 200px;
	padding: 1rem;
	overflow: scroll;
  color: #8967B3;
	margin-left: auto;
	text-align: center;
`

const AskButton = styled.button`
	margin-top: .5rem;
	border: none;
  color: white;
  background-color: #295F98;
  padding: .5rem 1rem;
	width: 100%
`

const TitleContainer = styled.div`
	margin-top: 1rem;
	padding: .5rem;
	display: flex;
	flex-direction: row;
`

const PoweredBy = styled.label`
	color: #B4B4B8;
	font-size: 10px;
	margin-left: .5rem;
`

function AskGemini() {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
	const placeHolderText = 'Ask me anything!';
	const onTextInputChange = (event) => {
		setQuestion(event.target.value);
	}

	const onAskButtonClick = async () => {
		try {
			const answer = await askGemini(question);
			setAnswer(answer)
		} catch (e) {
			setError('Gemini is sleeping, please try again later.')
		}
	};

	return (
		<>
			<GeminiContainer>
				<TitleContainer>
					<Title>Ask Gemini</Title>
					<PoweredBy>Powered by Gemini 2.0 Flash</PoweredBy>
				</TitleContainer>
				{answer && (
					<Answer>{answer}</Answer>
				)}
				{!answer && (
					<NonAnswer>{error ? error : placeHolderText}</NonAnswer>
				)}
			</GeminiContainer>
			<GeminiContainer>
				<TextInput placeholder="Type your question here.." onChange={onTextInputChange} />
				<AskButton onClick={onAskButtonClick}>Ask</AskButton>
			</GeminiContainer>
		</>
	)
}

export default AskGemini;