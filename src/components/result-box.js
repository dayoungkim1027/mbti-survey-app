import styled from 'styled-components';
import { getPollResults } from '../api/getPollResults';
import PollBox from '../components/poll-box';

const ResultContainer = styled.div`
	width: 100%;
`

// const Button = styled.button`
// 	background-color: white;
//   border: none;
// 	margin: .5rem;
// `

// const ButtonContainer = styled.div`
// 	display: flex;
//   align-items: center;
//   justify-content: center;
// `

const DetailContainer = styled.div`
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
	pollId
}) {
	const data = getPollResults(pollId);
	
	let totalCount = 0;
	data.results.map((result) => totalCount += result.count);
	const dataClone = data.results;
	const winnerOption = data.results.sort((a, b) => a.count - b.count)[data.results.length-1].option;

	return (
		<>
			<ResultContainer>
				{dataClone.map(info => (
					<PollBox label={info.choice} percentage={info.count/totalCount*100} winner={info.option === winnerOption}></PollBox>
				))}
			</ResultContainer>
			{/* <ButtonContainer>
				<Button onClick={onDetailClicked}>See Details →</Button>
			</ButtonContainer> */}
			<DetailContainer>
				<LiveStatus/> {data.status} | {totalCount} votes
			</DetailContainer>
		</>
	);
}

export default ResultBox;