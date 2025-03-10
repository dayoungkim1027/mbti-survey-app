import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuStatus } from '../store/menuSlice';

const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: white;
	position: absolute;
	top: 85px;;
`

const ExternalLink = styled.a`
	text-decoration: none;
	color: black;
	font-size: 18px;
	border-bottom: 1px solid #ececec;
	padding: 1rem;
`

export const MenuItems = [
	{
		title: '연애/결혼',
		path: '/relationship',
	},
	{
		title: '육아',
		path: '/childcare',
	},
	{
		title: '진로/직업',
		path: '/occupation',
	},
	{
		title: '아무거나',
		path: '/others',
	},
	// {
	// 	title: 'Ask Gemini',
	// 	path: '/askGemini'
	// }
];


function Menu() {
	const dispatch = useDispatch();
	const closeHamburgerMenu = () => {
		dispatch(setMenuStatus({ open: false }));
	}

	return (
		<MenuContainer>
			{MenuItems.map(menu => (
				<Link style={
					{
						'textDecoration': 'none',
						'color': 'black',
						'fontSize': '18px',
						'borderBottom': '1px solid #ececec',
						'padding': '1rem'
					}} onClick={closeHamburgerMenu} to={menu.path}>
					{menu.title}
				</Link>
			))}
			<ExternalLink href="https://dayoung-livid.vercel.app/askDeekay" rel="noreferrer" alt="homepage">Ask DeeKay</ExternalLink>
			<ExternalLink href="https://dayoung-livid.vercel.app/" rel="noreferrer" alt="homepage">Dayoung's Portfolio</ExternalLink>
		</MenuContainer>
	)
}

export default Menu;