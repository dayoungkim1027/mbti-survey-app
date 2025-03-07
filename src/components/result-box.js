import styled from 'styled-components';
import { getPollResults } from '../api/getPollResults';
import PollBox from '../components/poll-box';
import { useState } from 'react';
import ResultDetail from './result-detail'
import summarizeBy from '../utils/summarizeBy';

const ResultContainer = styled.div`
	width: 100%;
`

const Button = styled.button`
	background-color: white;
  border: none;
	margin: .5rem;
	margin-left: auto;
  padding-right: .5rem;
`

const ButtonContainer = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
`

const StatusContainer = styled.div`
	padding: 1rem;
	display: flex;
  align-items: center;
  justify-content: center;
	font-size: 12px;
`

const LiveStatus = styled.span`
	border: 1px solid #A5DD9B;
	background-color: #A5DD9B;
	border-radius: 50%;
	width: 10px;
  height: 10px;
	margin-right: .5rem;
`

const DetailTitle = styled.h3`
	font-size: 20px;
	margin-bottom: .5rem;
`

const TitleContainer = styled.div`
	margin: 1.5rem;
	border-bottom: 3px solid #2A528A;
`

const ParticipantsContainer = styled.div`
	padding: .5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Participant = styled.img`
	width: 3em;
	height: 3em;
	border-radius: 50%;
`

const Percentage = styled.h4`
	font-size: 28px;
	text-align: center;
	margin: 1rem 0 .5rem;
`

const ParticipantContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`

const Type = styled.label`
	font-size: 20px;
	text-align: center;
`

const Divider = styled.div`
	border-left: 1px solid #2A528A;
`

function ResultBox({
	pollId
}) {
	const data = getPollResults(pollId);

	const totalCount = data.data.length;
	const dataClone = data.results;
	const winnerOption = data.results.sort((a, b) => a.count - b.count)[data.results.length-1].option;
	// REDO

	const [isDetailShown, setIsDetailShown] = useState(false)
	const onDetailClicked = () => {
		setIsDetailShown(true);
	}

	// participants
	// const participantSummary = summarizeBy(data.data, 'type', 'gender');
	const typeSummary = summarizeBy(data.data, 'type').sort((a, b) => b.count-a.count);
	// const genderSummary = summarizeBy(data.data, 'gender');
	
	console.log(typeSummary)

	return (
		<>
			{!isDetailShown && (
				<>
					<ButtonContainer>
						<Button onClick={onDetailClicked}>See details</Button>
					</ButtonContainer>
					<ResultContainer>
						{dataClone.map(info => (
							<PollBox label={info.choice} percentage={info.count/totalCount*100} winner={info.option === winnerOption}></PollBox>
						))}
					</ResultContainer>
					<StatusContainer>
						<LiveStatus/> {data.status} | {totalCount} votes
					</StatusContainer>
				</>
			)}
			{isDetailShown && (
				<>
					<TitleContainer>
						<DetailTitle>
							Gender of Participants
						</DetailTitle>
					</TitleContainer>
					<ParticipantsContainer>
						{typeSummary.map((item, index) => (
							<>
								<ParticipantContainer>
									<Participant src={`/mbti-avatars/${item.type}-m.png`} alt="Profile image"/>
									<Percentage>{Math.round(item.count/totalCount*100)}%</Percentage>
									<Type>{item.type}</Type>
								</ParticipantContainer>
								
								{typeSummary.length-1 !== index && (
									<Divider />
								)}
							</>
						))}
					</ParticipantsContainer>

					<TitleContainer>
						<DetailTitle>
							Types of Participants
						</DetailTitle>
					</TitleContainer>

					<ResultDetail summary={typeSummary}/>
				</>
			)}
		</>
	);
}

export default ResultBox;