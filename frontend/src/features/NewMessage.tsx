import {useAppDispatch} from '../app/hooks.ts';
import {MessageMutation} from '../types.ts';
import {createMessage} from './messagesThunk.ts';
import {Typography} from '@mui/material';
import MessageForm from './components/MessageForm.tsx';

const NewMessage = () => {
  const dispatch = useAppDispatch();

  const onFormSubmit = async (msgMutation: MessageMutation) => {
    await dispatch(createMessage(msgMutation));
  };

  return (
    <>
      <Typography sx={{mt: 2}}  variant="h5">New Message</Typography>
      <MessageForm onSubmit={onFormSubmit} />
    </>
  );
};

export default NewMessage;