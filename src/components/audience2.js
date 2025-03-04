/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';

import INTJ_F from '../assets/mbti-avatars/intj-f.png';
import INTJ_M from '../assets/mbti-avatars/intj-m.png';
import ENTJ_F from '../assets/mbti-avatars/entj-f.png';
import ENTJ_M from '../assets/mbti-avatars/entj-m.png';
import INTP_F from '../assets/mbti-avatars/intp-f.png';
import INTP_M from '../assets/mbti-avatars/intp-m.png';
import ENTP_F from '../assets/mbti-avatars/entp-f.png';
import ENTP_M from '../assets/mbti-avatars/entp-m.png';

import INFJ_F from '../assets/mbti-avatars/infj-f.png';
import INFJ_M from '../assets/mbti-avatars/infj-m.png';
import ENFJ_F from '../assets/mbti-avatars/enfj-f.png';
import ENFJ_M from '../assets/mbti-avatars/enfj-m.png';
import INFP_F from '../assets/mbti-avatars/infp-f.png';
import INFP_M from '../assets/mbti-avatars/infp-m.png';
import ENFP_F from '../assets/mbti-avatars/enfp-f.png';
import ENFP_M from '../assets/mbti-avatars/enfp-m.png';

import ISTJ_F from '../assets/mbti-avatars/istj-f.png';
import ISTJ_M from '../assets/mbti-avatars/istj-m.png';
import ESTJ_F from '../assets/mbti-avatars/estj-f.png';
import ESTJ_M from '../assets/mbti-avatars/estj-m.png';
import ISTP_F from '../assets/mbti-avatars/istp-f.png';
import ISTP_M from '../assets/mbti-avatars/istp-m.png';
import ESTP_F from '../assets/mbti-avatars/estp-f.png';
import ESTP_M from '../assets/mbti-avatars/estp-m.png';

import ISFJ_F from '../assets/mbti-avatars/isfj-f.png';
import ISFJ_M from '../assets/mbti-avatars/isfj-m.png';
import ESFJ_F from '../assets/mbti-avatars/esfj-f.png';
import ESFJ_M from '../assets/mbti-avatars/esfj-m.png';
import ISFP_F from '../assets/mbti-avatars/isfp-f.png';
import ISFP_M from '../assets/mbti-avatars/isfp-m.png';
import ESFP_F from '../assets/mbti-avatars/esfp-f.png';
import ESFP_M from '../assets/mbti-avatars/esfp-m.png';

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 2rem;
`

const Image = styled.img`
	width: 30px;
	height: 30px;
`

function Audience(
	data
) {
	let target = [];
	let maleTarget = '';
	let femaleTarget = '';
	for (const item of data.gender) {
		if (item === 'male') {
			maleTarget = 'm'
		}
		if (item === 'female') {
			femaleTarget = 'f'
		}
	}
		
	for (const ps of data.mbti) {
		if (maleTarget !== '') {
			target.push(ps + '-' + maleTarget);
		}
		if (femaleTarget !== '') {
			target.push(ps + '-' + femaleTarget);
		}
	}
	
	return (
		<AvatarContainer>
			{target.map((avatar) => { 
				// "intj", "entj", "intp", "entp", "infj", "enfj", "infp", "enfp", "istj", "estj", "istp", "estp", "isfj", "esfj", "isfp", "esfp"
				if (avatar === 'intj-f') return <Image src={INTJ_F} />
				if (avatar === 'intj-m') return <Image src={INTJ_M} />
				if (avatar === 'entj-f') return <Image src={ENTJ_F} />
				if (avatar === 'entj-m') return <Image src={ENTJ_M} />
				if (avatar === 'intp-f') return <Image src={INTP_F} />
				if (avatar === 'intp-m') return <Image src={INTP_M} />
				if (avatar === 'entp-f') return <Image src={ENTP_F} />
				if (avatar === 'entp-m') return <Image src={ENTP_M} />

				if (avatar === 'infj-f') return <Image src={INFJ_F} />
				if (avatar === 'infj-m') return <Image src={INFJ_M} />
				if (avatar === 'enfj-f') return <Image src={ENFJ_F} />
				if (avatar === 'enfj-m') return <Image src={ENFJ_M} />
				if (avatar === 'infp-f') return <Image src={INFP_F} />
				if (avatar === 'infp-m') return <Image src={INFP_M} />
				if (avatar === 'enfp-f') return <Image src={ENFP_F} />
				if (avatar === 'enfp-m') return <Image src={ENFP_M} />

				if (avatar === 'istj-f') return <Image src={ISTJ_F} />
				if (avatar === 'istj-m') return <Image src={ISTJ_M} />
				if (avatar === 'estj-f') return <Image src={ESTJ_F} />
				if (avatar === 'estj-m') return <Image src={ESTJ_M} />
				if (avatar === 'istp-f') return <Image src={ISTP_F} />
				if (avatar === 'istp-m') return <Image src={ISTP_M} />
				if (avatar === 'estp-f') return <Image src={ESTP_F} />
				if (avatar === 'estp-m') return <Image src={ESTP_M} />

				if (avatar === 'isfj-f') return <Image src={ISFJ_F} />
				if (avatar === 'isfj-m') return <Image src={ISFJ_M} />
				if (avatar === 'esfj-f') return <Image src={ESFJ_F} />
				if (avatar === 'esfj-m') return <Image src={ESFJ_M} />
				if (avatar === 'isfp-f') return <Image src={ISFP_F} />
				if (avatar === 'isfp-m') return <Image src={ISFP_M} />
				if (avatar === 'esfp-f') return <Image src={ESFP_F} />
				if (avatar === 'esfp-m') return <Image src={ESFP_M} />

			})}
		</AvatarContainer>
	);
}

export default Audience;