import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { globalSlice, userSlice, conversationSlice, messageSlice, notificationSlice, friendSlice } from '../reducers';

export const store = configureStore({
  reducer: {
    globalSlice,
    userSlice,
    messageSlice,
    conversationSlice,
    notificationSlice,
    friendSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
