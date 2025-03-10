import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getPollResults } from '../api/getPollResults';
import PollBox from '../components/poll-box';

const ResultContainer = styled.div`
	width: 100%;
`

const ButtonContainer = styled.div`
	display: flex;
  	justify-content: end;
    margin: 1rem;
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

function ResultBox({
	pollData
}) {
	const data = getPollResults(pollData.id);

	const totalCount = data.data.length;
	const dataClone = data.results;
	const winnerOption = data.results.sort((a, b) => a.count - b.count)[data.results.length-1].option;
	// REDO

	return (
		<>
			<ButtonContainer>
				<Link style={
					{
						'textDecoration': 'none',
						'color': 'black',
					}} key={pollData.id} to={`/polls/${pollData.id}/survey-results`} state={{ result: {data}, pollData: {pollData} }}>
						See details
					</Link>
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
	);
}

export default ResultBox;