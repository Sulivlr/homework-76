import {Grid, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../app/hooks.ts';
import {selectMessages} from './messagesSlice.ts';
import {useEffect} from 'react';
import {fetchMessages} from './messagesThunk.ts';
import ChatMessage from './ChatMessage.tsx';


const Messages = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);


  return (
    <Grid container direction="column" gap={2}>
      <Grid item>
        <Grid item>
          <Typography variant="h5">Messages</Typography>
        </Grid>
      </Grid>
      <Grid item container gap={2}>
        {messages.map(message => (
          <ChatMessage key={message.id} author={message.author} message={message.message} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Messages;