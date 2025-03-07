import styled from 'styled-components';
import PlusIcon from '../assets/plus-2.png';

const PostContainer = styled.div`
	margin: 1rem;
	padding: .5rem;
	border: 1px solid #ececec;
	border-radius: 7px;
	
`

const BlockContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: row;
`

const TextInput = styled.input`
	width: 100%;
	border: none;
	border-bottom: 1px solid #B4B4B8;
	border-radius: unset;
	height: 20px;
`

const TextArea = styled.textarea`
	margin-top: 0;
	width: 100%;
	border: 1px solid #B4B4B8;
	border-radius: unset;
`

const Option = styled.input`

`

const OptionLabel = styled.label`
	font-size: 14px;
	margin-left: .5rem;
`

const Toggle = styled.input`

`

const ToggleLabel = styled.label`
	font-size: 14px;
`

const AddOption = styled.img`
	margin-top: .5rem;
	width: 18px;
	padding: 2px;
`

const OptionBlockContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`

const OptionContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const PostButton = styled.button`
	border: none;
  color: white;
  background-color: #295F98;
  padding: .5rem 1rem;
	width: 100%
`

const PostButtonContainer = styled.div`
	padding: 1rem;
`

function CreatePost() {
  return (
		<>
			<PostContainer>
				<BlockContainer>
					<TextInput placeholder="Type your question here"/>
				</BlockContainer>

				<BlockContainer>
					<TextArea/>
				</BlockContainer>

				<OptionBlockContainer>
					<OptionContainer>
						<Option type='radio'></Option>
						<OptionLabel>Option 1</OptionLabel>
					</OptionContainer>
					<AddOption src={PlusIcon}/>
				</OptionBlockContainer>

				<OptionBlockContainer>
					<ToggleLabel>
						<Toggle type='checkbox'/>
						Multiple
					</ToggleLabel>
					<ToggleLabel>
						<Toggle type='checkbox'/>
						Required
					</ToggleLabel>
				</OptionBlockContainer>
			</PostContainer>

			<PostButtonContainer>
				<PostButton>Post</PostButton>
			</PostButtonContainer>
		</>



	)
}

export default CreatePost;