import Navigation from './components/navigation'
import { Route, Routes } from 'react-router-dom';
import Home from './views/home'
import styled from 'styled-components';
import Poll from './views/poll';
import PollDetail from './views/poll-detail';
import CreatePost from './views/create-post';
import Menu from './components/menu';
import { useSelector } from 'react-redux';
import RelationshipPolls from './views/relationship-polls';
import ChildcarePolls from './views/childcare-polls';
import OccupationPolls from './views/occupation-polls';
import OtherPolls from './views/other-polls';

const AppContainer = styled.div`
  overflow: scroll;
`;

function App() {
  const isMenuOpen = useSelector((state) => state.menuStatus.data).open;

  console.log('isMenuOpen: ', isMenuOpen);
  return (
    <AppContainer>
      <Navigation style={{'position': 'sticky', 'top': '0'}}></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/polls/:state" element={<Poll/>}/>
        <Route path="/polls/:state/survey-results" element={<PollDetail/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/relationship" element={<RelationshipPolls/>}/>
        <Route path="/childcare" element={<ChildcarePolls/>}/>
        <Route path="/occupation" element={<OccupationPolls/>}/>
        <Route path="/others" element={<OtherPolls/>}/>
      
      
      </Routes>
      
      {isMenuOpen && (
        <Menu/>
      )}
    </AppContainer>
  );
}

export default App;
