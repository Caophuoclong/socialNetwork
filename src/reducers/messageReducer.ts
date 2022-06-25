import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumMessageType, IMessage } from '../interfaces';

interface Interface {
  messages: {
    [key: string]: Array<IMessage>;
  };
}
const initialState: Interface = {
  messages: {
    '1': [
      {
        messageId: 'me',
        conversationId: '1',
        messageCreateAt: new Date().toISOString(),
        sourceId: '0',
        messageContent: 'Xin chao',
        messageType: EnumMessageType.TEXT,
      },
    ],
    '4': [
      {
        messageId: 'me2',
        conversationId: '4',
        messageCreateAt: new Date(1652658341000).toISOString(),
        sourceId: 'dfa3b9a5-f442-11ec-9e1d-0242ac120002',
        messageContent: 'Xin chao',
        messageType: EnumMessageType.TEXT,
      },
      {
        messageId: 'me',
        conversationId: '4',
        messageCreateAt: new Date(1653659441000).toISOString(),
        sourceId: 'f2',
        messageContent: 'Xin chao!',
        messageType: EnumMessageType.TEXT,
      },
    ],
  },
};

const messageSlice = createSlice({
  name: 'message slice',
  initialState,
  reducers: {
    addMessages: (state: Interface, action: PayloadAction<IMessage>) => {
      const conversationId = action.payload.conversationId;
      return {
        ...state,
        messages: {
          ...state.messages,
          [conversationId]: [
            ...(state.messages[conversationId]
              ? state.messages[conversationId]
              : []),
            action.payload,
          ],
        },
      };
    },
  },
});

export default messageSlice.reducer;
export const { addMessages } = messageSlice.actions;
