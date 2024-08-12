import {Message} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchMessages} from './messagesThunk.ts';

interface MessageState {
  item: Message[];
  fetching: boolean;
}

const initialState: MessageState = {
  item: [],
  fetching: false,
};


export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.fetching = true
    }).addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
      state.fetching = false;
      state.item = messages
    }).addCase(fetchMessages.rejected, (state) => {
      state.fetching = false;
    })
  },
  selectors: {
    selectMessages: (state) => state.item,
    selectFetching: (state) => state.fetching,
  }
});

export const messagesReducer = messagesSlice.reducer;
export const {selectMessages,
  selectFetching
} = messagesSlice.selectors;