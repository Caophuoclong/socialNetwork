import { createSlice } from '@reduxjs/toolkit';
import { IFriend } from '../interfaces';

interface Interface {
  friends: Array<IFriend>;
  loading: boolean;
}

const initialState: Interface = {
  friends: [
    {
      userId: 'f2',
      avatarUrl: 'https://picsum.photos/40',
      isOnline: true,
      lastOnline: 'Today',
      userFName: 'Long',
      username: 'Johnnn',
      userEmail: 'johnM@gmal.com',
    },
    {
      userId: 'f4',
      userFName: 'John ',
      username: 'johhnsmit4',
      avatarUrl: 'https://picsum.photos/40',
      isOnline: false,
      lastOnline: new Date(1653310252000).toISOString(),
      userEmail: 'johnM@gmal.com',
    },
    {
      userId: 'f3',
      userFName: 'John Smith1223',
      username: 'johhnsmit4',
      avatarUrl: 'https://picsum.photos/40',
      isOnline: false,
      lastOnline: new Date(1653655852000).toISOString(),
      userEmail: 'johnM@gmal.com',
    },
    {
      userId: 'f1',
      userFName: 'JCakCak',
      username: 'johhnsmit4',
      avatarUrl: 'https://picsum.photos/40',
      isOnline: false,
      lastOnline: new Date(1653742252000).toISOString(),
      userEmail: 'johnM@gmal.com',
    },
  ],
  loading: false,
};

const friendSlice = createSlice({
  name: 'friend slice',
  initialState,
  reducers: {},
});

export default friendSlice.reducer;
export const {} = friendSlice.actions;
