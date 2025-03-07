import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlusIcon from '../assets/plus.png';
import ProfileIcon from '../assets/profile.png';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/userSlice';

const PlusImage = styled.img`
	width: 33px;
`
const NavigationContainer = styled.div`
	padding: 1.5rem;
	border-bottom: 1px solid #ececec;
	display: flex;
`;

const Profile = styled.div`

`

const Image = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
`

const CreatePost = styled.div`
	margin-left: auto;
	margin-right: .5rem;
`

function Navigation() {
	const profile = {
		type: 'INTJ',
		gender: 'male'
	}

	const onActionButtonClick = () => {
		console.log('plus clicked')
	}

	const userDoc = useSelector((state) => state.user.data).user;
  const dispatch = useDispatch();

  const [user, setProfile] = useState(userDoc);

	const logInUser = () => {
    dispatch(setUser({ id: Date.now(), user: profile}));
		setProfile(profile)
  };

	const logOutUser = () => {
    dispatch(clearUser());
		setProfile('')
  };

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
			
			<CreatePost>
				<Link to="/create-post">
					<PlusImage src={PlusIcon} alt="ask question" onClick={onActionButtonClick}/>
				</Link>
			</CreatePost>

			{!user && (
				<Image src={ProfileIcon} alt="Profile" onClick={logInUser}/>
			)}
			
			{user && (
				<Profile onClick={logOutUser}>
					<Image src={`/mbti-avatars/${userDoc.type}-${userDoc.gender[0]}.png`} alt="Avatar"/>
				</Profile>
			)}
		</NavigationContainer>
	);
}

export default Navigation;