import styled from 'styled-components';
import { getPollResults } from '../api/getPollResults';
import PollBox from '../components/poll-box';

const ResultContainer = styled.div`
	width: 100%;
`

function ResultBox(
	poll
) {
	const data = getPollResults(poll.pollId);
	
	let totalCount = 0;
	data.results.map((result) => totalCount += result.count);
	const dataClone = data.results;
	const winnerOption = data.results.sort((a, b) => a.count - b.count)[data.results.length-1].option;

	return (
		<ResultContainer>
			{dataClone.map(info => (
				<PollBox label={info.choice} percentage={info.count/totalCount*100} winner={info.option === winnerOption}></PollBox>
			))}

		</ResultContainer>
	);
}

export default ResultBox;