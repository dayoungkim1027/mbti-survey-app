import styled from 'styled-components';
import ArrowIcon from '../assets/arrow.png';
import colorMapping from '../mapping/mbti-color.json'

const ArrowImage = styled.img`
	width: 18px;
	margin: 0 .3rem;
`

const Tag = styled.span`
	border-radius: 25px;
	padding: 6px 8px;
	margin: 0 1px;
	font-size: 10px;
`


function Audience({
	postedMbti,
	targetMbti
}) {
	
	function getCssColor(mbti) {
		return colorMapping[mbti];
	}

  return (
		<>
			<Tag style={{'background-color': getCssColor(postedMbti) }}>{postedMbti}</Tag>
			
			<ArrowImage src={ArrowIcon} />
			{targetMbti.length === 16 && (
				<Tag style={{'background-color': 'none' }}>All</Tag>
			)}
			{targetMbti.length !== 16 && targetMbti.map(target => (
				<Tag style={{'background-color': getCssColor(target) }}>{target}</Tag>
			))}
		</>
		
	);
}

export default Audience;