import ChatBar from './UI/AppBar/ChatBar.tsx';
import Messages from './features/Messages.tsx';
import {Container} from '@mui/material';
import NewMessage from './features/NewMessage.tsx';

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
          <NewMessage />
          <Messages/>
        </Container>
      </main>
    </>
  );
};

export default App;
