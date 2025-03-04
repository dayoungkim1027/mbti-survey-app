import Navigation from './components/navigation'
import { Route, Routes } from 'react-router-dom';
import Home from './views/home'
import styled from 'styled-components';
import Poll from './views/poll';

const AppContainer = styled.div`
  overflow: scroll;
`;

function App() {
  

  return (
    <AppContainer>

      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/polls/:state" element={<Poll/>}/>
      </Routes>

    </AppContainer>
  );
}

export default App;
