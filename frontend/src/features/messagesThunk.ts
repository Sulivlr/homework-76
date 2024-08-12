import {createAsyncThunk} from '@reduxjs/toolkit';
import {Message} from '../types.ts';
import axiosApi from '../axiosApi.ts';

export const fetchMessages = createAsyncThunk<Message[]>(
  'fetchMessages',
  async () => {
    const {data: messages} = await axiosApi.get<Message[]>('/messages')
    return messages;
  }
)