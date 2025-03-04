import styled from 'styled-components';

const FilterContainer = styled.div`
	border-bottom: 1px solid #ececec;
	display: flex;
	flex-direction: row;
	width: 100%;
`

const Tag = styled.span`
	margin: 3px;
	color: #94969b;
	border: 1px solid #94969b;
	border-radius: 25px;
	padding: 3px 7px;
`

const TagContainer = styled.div`
	padding: .5rem;
  display: flex;
  background-color: #f3f3f3;
  flex-wrap: wrap;
	width: 100%;
`

const Button = styled.button`
	border: none;
	border-right: 1px solid #ececec;
	background-color: white;
	padding: 1rem;
	white-space: nowrap;

`

function Filter() {
	const mbtis = ["#intj", "#entj", "#intp", "#entp", "#infj", "#enfj", "#infp", "#enfp", "#istj", "#estj", "#istp", "#estp", "#isfj", "#esfj", "#isfp", "#esfp"];
	
	return (
		<FilterContainer>
			<Button>Filter By</Button>
			<TagContainer>
				{/* {mbtis.map(mbti => (
					<Tag>{mbti}</Tag>
				))} */}
				<Tag>#intj</Tag>

			</TagContainer>
		</FilterContainer>
	);
}

export default Filter;