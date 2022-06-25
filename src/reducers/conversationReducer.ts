import { createSlice } from '@reduxjs/toolkit';
import { IConversation } from '../interfaces';

interface Interface {
  conversations: Array<IConversation>;
  loading: boolean;
}
const initialState: Interface = {
  conversations: [
    {
      imgUrl: 'https://picsum.photos/40',
      participants: [
        {
          userId: 'dfa3b9a5-f442-11ec-9e1d-0242ac120002',
          userFName: 'Tran Cao Phuoc Long',
          username: 'caophuoclong',
          avatarUrl:
            'https://www.gravatar.com/avatar/caophuoclong1?d=identicon',
          userEmail: 'caophuoclong1@gmail.com',
        },
        {
          userId: 'f2',
          userFName: 'John Smith123',
          username: 'johhnsmit',
          avatarUrl: 'https://picsum.photos/40',
          userEmail: 'jo',
        },
      ],
      conversationCreateAt: 'asdas',
      conversationType: 'private',
      conversationId: '4',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      participants: [
        {
          userId: 'dfa3b9a5-f442-11ec-9e1d-0242ac120002',
          userFName: 'Tran Cao Phuoc Long',
          username: 'caophuoclong',
          avatarUrl:
            'https://www.gravatar.com/avatar/caophuoclong1?d=identicon',
          userEmail: 'caophuoclong1@gmail.com',
        },
        {
          userId: 'f2',
          userFName: 'John Smith123',
          username: 'johhnsmit',
          avatarUrl: 'https://picsum.photos/40',
          userEmail: 'jo',
        },
      ],
      conversationCreateAt: 'asdas',
      conversationType: 'private',
      conversationId: '5',
    },
  ],
  loading: false,
};
const conversationSlice = createSlice({
  name: 'conversation slice',
  initialState,
  reducers: {},
});

export default conversationSlice.reducer;
export const {} = conversationSlice.actions;
