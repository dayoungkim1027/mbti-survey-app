import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Audience from '../components/audience';
import ResultBox from '../components/result-box';
import { getPollResults } from '../api/getPollResults';

const PollContainer = styled.div`
  padding: 0;
`

const HeadingContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ececec;
`

const Title = styled.h3`
  font-weight: bolder;
  font-size: 21px;
`

const ContentContainer = styled.div`
  padding: 1rem;
`

const Content = styled.p`
  font-size: 16px;
`

const PollBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
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

const TextInput = styled.textarea`
  border: 1px solid #AAC4FF;
  border-radius: 0;
  margin-bottom: 1rem;

  &:hover {
    border-radius: 0;
    border: 1px solid #554994;
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

const Comment = styled.p`
  font-size: 14px;
  padding: .8rem; 
`

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ececec;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.6rem;
`

const TypeLabel = styled.label`
  font-size: 12px;
`


function Poll() {
	const location = useLocation();
  const { poll } = location.state;
  const [selectedOption, setSelectedOption] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userSubmittedResponse, setUserSubmittedResponse] = useState(false);

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
          
          <Comments>
            {poll.userInput && responses &&
              responses.map((response) => (
                <CommentContainer>
                  <UserInfo>
                    <TypeLabel>{response.type}</TypeLabel>
                    <UserId>{`${response.userId[0]}*****`}</UserId>
                  </UserInfo>
                  <Comment>{response.value}</Comment>
                </CommentContainer>
            ))}
          </Comments>

          {poll.userInput && (
            <TextInput type="text" value={userInput} onChange={onUserInputChange}></TextInput>
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