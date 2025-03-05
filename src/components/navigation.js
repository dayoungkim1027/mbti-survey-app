import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlusIcon from '../assets/plus.png';

const PlusImage = styled.img`
	width: 33px;
	margin-left: auto;
	margin-right: .5rem;
`
const NavigationContainer = styled.div`
	padding: 1.5rem;
	border-bottom: 1px solid #ececec;
	display: flex;
`;

const Profile = styled.div`

`

const Image = styled.img`
	width: 29px;
	border-radius: 50%;
`

function Navigation() {
	const profile = {
		mbti: 'intj',
		gender: 'male'
	}

	return (
		<NavigationContainer>
			<Link style={
				{
					'textDecoration': 'none',
					'color': 'black',
					'fontWeight': 'bolder',
					'fontSize': '28px'
				}} to="/">
				{/* <MenuIcon /> */}
				{/* <h3>mbti Survey</h3> */}
				moomool
			</Link>
			<PlusImage src={PlusIcon} alt="ask question"/>
			<Profile>

				<Image src={`/mbti-avatars/${profile.mbti}-${profile.gender[0]}.png`} alt="Avatar"/>
			</Profile>
		</NavigationContainer>
	);
}

export default Navigation;