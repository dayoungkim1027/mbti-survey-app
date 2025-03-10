import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from '../assets/menu.svg';
import PlusIcon from '../assets/plus.png';
// import ProfileIcon from '../assets/profile.png';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/userSlice';
import { setMenuStatus } from '../store/menuSlice';

const PlusImage = styled.img`
	width: 33px;
`
const NavigationContainer = styled.div`
	border-bottom: 1px solid #ececec;
	display: flex;
`;

// const Profile = styled.div`
// 	padding: 1.5rem;
// `

// const Image = styled.img`
// 	width: 32px;
// 	height: 32px;
// 	border-radius: 50%;
// 	padding: 1.5rem 1.5rem 1.5rem 0;
// `

const CreatePost = styled.div`
	margin-left: auto;
	margin-right: 1rem;
	padding: 1.5rem 0 1.5rem;
`

const MenuContainer = styled.div`
	padding: 1rem;
	cursor: pointer;
`

function Navigation() {
	const profile = {
		type: 'INTJ',
		gender: 'male'
	}

	const onActionButtonClick = () => {
		console.log('plus clicked')
	}

	const dispatch = useDispatch();
	const userDoc = useSelector((state) => state.user.data).user;
	const isMenuOpen = useSelector((state) => state.menuStatus.data).open;

  const [user, setProfile] = useState(userDoc);
	const [showMenu, setShowMenu] = useState(isMenuOpen);

	const logInUser = () => {
    dispatch(setUser({ id: Date.now(), user: profile }));
		setProfile(profile)
  };

	const logOutUser = () => {
    dispatch(clearUser());
		setProfile('')
  };

	const onMenuClick = () => {
		dispatch(setMenuStatus({ open: showMenu ? false : true }));
		setShowMenu(showMenu ? false : true);
	};

	return (
		<NavigationContainer>
			<MenuContainer onClick={onMenuClick}>
				<HamburgerMenu style={{'marginTop': '.7rem'}}/>
			</MenuContainer>
			<Link style={
				{
					'textDecoration': 'none',
					'color': 'black',
					'fontWeight': 'bolder',
					'fontSize': '28px',
					'borderLeft': '1px solid #ececec',
					'padding': '1.5rem'
				}} to="/">
				{/* <MenuIcon /> */}
				{/* <h3>mbti Survey</h3> */}
				mmool
			</Link>
			
			<CreatePost>
				<Link to="/create-post">
					<PlusImage src={PlusIcon} alt="ask question" onClick={onActionButtonClick}/>
				</Link>
			</CreatePost>

			{/* {!user && (
				<Image src={ProfileIcon} alt="Profile" onClick={logInUser}/>
			)}
			
			{user && (
				<Profile onClick={logOutUser}>
					<Image src={`/mbti-avatars/${userDoc.type}-${userDoc.gender[0]}.png`} alt="Avatar"/>
				</Profile>
			)} */}
		</NavigationContainer>
	);
}

export default Navigation;