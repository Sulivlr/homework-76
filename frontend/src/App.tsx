import ChatBar from './UI/AppBar/ChatBar.tsx';
import Messages from './features/Messages.tsx';
import {Container} from '@mui/material';

const App = () => {
  return (
    <>
      <header>
        <Container>
          <ChatBar/>
        </Container>
      </header>
      <main>
        <Container>
          <Messages/>
        </Container>
      </main>
    </>
  );
};

export default App;
