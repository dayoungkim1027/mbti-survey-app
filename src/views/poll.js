import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import ProfileIcon from '../assets/profile.png';
import { useLocation } from 'react-router-dom';
import Audience from '../components/audience';
import ResultBox from '../components/result-box';
import { getPollResults } from '../api/getPollResults';

const PollContainer = styled.div`
  padding: 0;
`

const HeadingContainer = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #ececec;
`

const Title = styled.h3`
  font-weight: bolder;
  font-size: 21px;
`

const ContentContainer = styled.div`
  padding: 1.5rem;
`

const Content = styled.p`
  font-size: 16px;
`

const PollBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

const RadioButton = styled.input`
  margin: 0 .5rem 0 0;
  vertical-align: middle;
`

const OptionLabel = styled.label`
  font-size: 14px;
  vertical-align: middle;
  background-color: #EEF1FF;
  padding: .7rem 1rem;
  margin-bottom: .5rem;
`

const SubmitButton = styled.button`
  border: none;
  color: white;
  background-color: #295F98;
  padding: .5rem 1rem;
`

const TextInput = styled.input`
  border: none;
  border-radius: 0;
  margin: .8rem 1rem 0 0;
  width: 100%;

  &:focus {
    border-radius: 0;
  }

  &:focus-visible {
    border-radius: 0;
  }
`

const Label = styled.span`
  color: #94969b;
	font-size: 12px;
`

const AudienceContainer = styled.div`
  display: flex;
`

const Comments = styled.div`
  border-top: 1px solid #ececec;
  padding: 0;
`

const UserId = styled.p`
  margin: 0;
  font-size: 10px;
  color: #94969b;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`

const Comment = styled.p`
  font-size: 14px;
  margin: .3rem 0 .5rem; 
`

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .7rem 0;
`

const TypeLabel = styled.label`
  font-size: 12px;
  margin-right: .5rem;
  color: #898AA6;
`

const Avatar = styled.img`
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: .8rem 1rem 0 0;
`

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ececec;
`

const CommentsHeading = styled.h4`
  margin-bottom: 0.7rem;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

function Poll() {
  const profile = {
		type: 'intj',
		gender: 'male'
	}

	const location = useLocation();
  const { poll } = location.state;
  const [selectedOption, setSelectedOption] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userSubmittedResponse, setUserSubmittedResponse] = useState(false);

  // // get user login info
  const userDoc = useSelector((state) => state.user.data).user;
  const dispatch = useDispatch();
  const [user, setProfile] = useState(userDoc);
	const logInUser = () => {
    dispatch(setUser({ id: Date.now(), user: profile}));
		setProfile(profile)
  };


  const onRadioButtonChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const onPollSubmit = (event) => {
    setTimeout(() => {
      setUserSubmittedResponse(true);
    }, 100);
  };

  // for user input polls -- show those comments on top
  let responses = [];
  if (poll.userInput) {
    responses = getPollResults(poll.id).data;
  }
  
	return (
    <PollContainer>
      <HeadingContainer>
        <Label>{poll.category.toUpperCase()}</Label>
        <Title>{poll.title}</Title>
        <AudienceContainer>
          <Audience postedMbti={poll.posted_mbti} targetMbti={poll.target_mbti}/>
        </AudienceContainer>
      </HeadingContainer>
      <ContentContainer>
        <Content>{poll.description}</Content>
      </ContentContainer>
      {!userSubmittedResponse && (
        <PollBox>
          {!poll.userInput && poll.options.map(item => (
            <OptionLabel style={{ 'backgroundColor': selectedOption === `option-${item.id}` ? '#AAC4FF' : '#EEF1FF' }}>
              <RadioButton type="radio" name="radioGroup" value={`option-${item.id}`} checked={selectedOption === `option-${item.id}`} onChange={onRadioButtonChange}/>
              {item.choice}
            </OptionLabel>
              
          ))}
          

          {poll.userInput && responses && (
            <CommentsHeading>Comments</CommentsHeading>
          )}

          <Comments>
            {poll.userInput && responses &&
              responses.map((response) => (
                <BlockContainer>
                  <Avatar src={`/mbti-avatars/${response.type}-${response.gender[0]}.png`} alt="Profile image"/>
                  <CommentContainer>
                    <UserInfo>
                      <TypeLabel>{response.type} </TypeLabel>
                      <UserId>{`${response.userId[0]}*****`}</UserId>
                    </UserInfo>
                    <Comment>{response.value}</Comment>
                  </CommentContainer>
                </BlockContainer>
            ))}
          </Comments>

          
          {poll.userInput && user && (
            <InputContainer>
              <Avatar src={`/mbti-avatars/${userDoc.type}-${userDoc.gender[0]}.png`} alt="Profile image"/>
              <TextInput type="text" placeholder="Add a comment" value={userInput} onChange={onUserInputChange}></TextInput>
            </InputContainer>
          )}

          {poll.userInput && !userDoc && (
            <InputContainer>
              <Avatar src={ProfileIcon} alt="Profile" onClick={logInUser}/>
              <TextInput type="text" placeholder="Add a comment" value={userInput} onChange={onUserInputChange}></TextInput>
            </InputContainer>
          )}

          <SubmitButton onClick={onPollSubmit}>SUBMIT</SubmitButton>

        </PollBox>
      )}
      {userSubmittedResponse && !poll.userInput && (
        <ResultBox pollId={poll.id}/>
      )}

      
      {/* {userSubmittedResponse && poll.userInput && (
        {}
      )} */}
    </PollContainer>
	)
}

export default Poll;