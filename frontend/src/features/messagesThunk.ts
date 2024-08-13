import {createAsyncThunk} from '@reduxjs/toolkit';
import {Message, MessageMutation} from '../types.ts';
import axiosApi from '../axiosApi.ts';

export const fetchMessages = createAsyncThunk<Message[]>(
  'fetchMessages',
  async () => {
    const {data: messages} = await axiosApi.get<Message[]>('/messages');
    return messages;
  }
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
  'createMessage',
  async (messageMutation) => {
    await axiosApi.post('/messages', messageMutation);
  }
);