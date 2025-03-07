import Navigation from './components/navigation'
import { Route, Routes } from 'react-router-dom';
import Home from './views/home'
import styled from 'styled-components';
import Poll from './views/poll';
import PollDetail from './views/poll-detail';
import CreatePost from './views/create-post';

const AppContainer = styled.div`
  overflow: scroll;
`;

function App() {
  return (
    <AppContainer>
      <Navigation style={{'position': 'sticky', 'top': '0'}}></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/polls/:state" element={<Poll/>}/>
        <Route path="/polls/:state/survey-results" element={<PollDetail/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
      </Routes>
    </AppContainer>
  );
}

export default App;
