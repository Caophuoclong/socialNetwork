import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '~/interfaces';
import userService from '~/services/userService';
interface Interface {
  loading: boolean;
}
const initialState: IUser & Interface = {
  userId: '0',
  avatarUrl:
    'https://images.unsplash.com/photo-1653594964387-a26001bc8921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  userFName: 'John Smith',
  username: 'johhnsmit',
  userEmail: 'caophuoclong1@gmail.com',
  loading: false,
};
export const getMe = createAsyncThunk('getMe', () => {
  return userService
    .getMe()
    .then((response) => response)
    .catch((error) => error);
});
const userSlice = createSlice({
  name: 'user slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
