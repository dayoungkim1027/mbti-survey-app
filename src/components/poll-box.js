import styled from 'styled-components';

const OptionBox = styled.div`
	padding: 1.2rem;
`

const DefaultBox = styled.div`
	background-color: #F5F5F7;
	margin: 0 1rem .5rem;
	position: relative;
`

const PollLabel = styled.label`
	font-size: 16px;
	position: absolute;
	top: 10px;
	left: 15px;
`

const PercentageLabel = styled.label`
	position: absolute;
	top: 10px;
	right: 15px;
`

function PollBox(
	data
) {
	const { label, percentage, winner } = data;
	return (
		<DefaultBox>
			<OptionBox style={{ 'backgroundColor': winner ? '#fa5352' : '#B7B7B7' , 'width': `${percentage}%` }}/>
			<PollLabel>{label}</PollLabel>
			<PercentageLabel>{Math.round(percentage)}%</PercentageLabel>
		</DefaultBox>
	);
}

export default PollBox;