import styled from 'styled-components';
import summarizeBy from '../utils/summarizeBy';
import { useLocation } from 'react-router-dom';
import ResultDetail from '../components/result-detail'

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
	justify-content: center;
`

const Participant = styled.img`
	width: 3em;
	height: 3em;
	border-radius: 50%;
`

const GenderParticipant = styled.img`
	width: 5em;
	height: 5em;
	border-radius: 50%;
`

const Percentage = styled.h4`
	font-size: 28px;
	text-align: center;
	margin: 0.5rem 0;
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
	border-left: 1px solid #CDC1FF;
`

const SummaryContainer = styled.div`
	padding: 1.5rem 1.5rem 0;
`

const Label = styled.p`
	font-size: 18px;
	font-weight: lighter;
	margin-right: 1rem;
	min-width: 90px;
	margin-bottom: 0;
`

const Info = styled.p`
	font-size: 18px;
	margin-bottom: 0;
`

const InfoBlock = styled.div`
	display: flex;
	flex-direction: row;
`

function PollDetail() {
	const location = useLocation();
	const { pollData, result } = location.state;
	const poll = pollData.pollData;
	const totalCount = result.data.data.length;
	const typeSummary = summarizeBy(result.data.data, 'type').sort((a, b) => b.count-a.count);
	const genderSummary = summarizeBy(result.data.data, 'gender');

	return (
		<>
			<SummaryContainer>
				<InfoBlock>
					<Label>Category</Label>
					<Info>{poll.category}</Info>
				</InfoBlock>
				<InfoBlock>
					<Label>Title</Label>
					<Info>{poll.title}</Info>
				</InfoBlock>
				<InfoBlock>
					<Label>Description</Label>
					<Info>{poll.description}</Info>
				</InfoBlock>
			</SummaryContainer>

			<TitleContainer>
				<DetailTitle>
					Survey Results
				</DetailTitle>
			</TitleContainer>
			<ResultDetail summary={typeSummary} category={'type'}></ResultDetail>



			<>
				<TitleContainer>
					<DetailTitle>
						Gender of Participants
					</DetailTitle>
				</TitleContainer>
				<ParticipantsContainer>
					{genderSummary.map((item, index) => (
						<>
							<ParticipantContainer>
								<GenderParticipant src={`/${item.gender}.png`} alt="Gender"/>
								<Percentage>{Math.round(item.count/totalCount*100)}%</Percentage>
								<Type>{item.gender.toUpperCase()}</Type>
							</ParticipantContainer>
							
							{genderSummary.length-1 !== index && (
								<Divider />
							)}
						</>
					))}
				</ParticipantsContainer>
				<TitleContainer>
					<DetailTitle>
						Personality Types of Participants
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

			</>
		</>
	)
}

export default PollDetail;