import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IConversation } from '../interfaces';
import authService from '~/services/authService';
interface IGlobalSilce {
  choosendConversation: IConversation[];
  minimizeConversation: IConversation[];
  locale: 'en' | 'vi';
}
export const reFreshToken = createAsyncThunk('reFreshToken', () => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const response = await authService.refreshToken();
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
});
const initialState: IGlobalSilce = {
  minimizeConversation: [],
  choosendConversation: [
    // {
    //   imgUrl: 'https://picsum.photos/40',
    //   participants: [
    //     {
    //       _id: '0',
    //       name: 'John Smith',
    //       username: 'johhnsmit',
    //       imgUrl: 'https://picsum.photos/40',
    //     },
    //     {
    //       _id: 'f2',
    //       name: 'John Smith123',
    //       username: 'johhnsmit',
    //       imgUrl: 'https://picsum.photos/40',
    //     },
    //   ],
    //   createAt: 'asdas',
    //   type: 'private',
    //   _id: '4',
    // },
  ],
  locale: 'vi',
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    addChoosenConversation: (
      state: IGlobalSilce,
      action: PayloadAction<IConversation>
    ) => {
      if (state.choosendConversation.length === 3) {
        state.minimizeConversation.push(state.choosendConversation[0]);
        state.choosendConversation.splice(0, 1);
        state.choosendConversation.push(action.payload);
      } else {
        state.choosendConversation.push(action.payload);
      }
    },
    addMinimizeConversation: (
      state: IGlobalSilce,
      action: PayloadAction<IConversation>
    ) => {
      return {
        ...state,
        choosendConversation: state.choosendConversation.filter(
          (conversation) =>
            conversation.conversationId !== action.payload.conversationId
        ),
        minimizeConversation: ([] as IConversation[]).concat(
          action.payload,
          state.minimizeConversation.filter(
            (conversation) =>
              conversation.conversationId !== action.payload.conversationId
          )
        ),
      };
    },
    removeChoosenConversation: (
      state: IGlobalSilce,
      action: PayloadAction<IConversation>
    ) => {
      return {
        ...state,
        choosendConversation: state.choosendConversation.filter(
          (conversation) =>
            conversation.conversationId !== action.payload.conversationId
        ),
      };
    },
    removeMinimizeConversation: (
      state: IGlobalSilce,
      action: PayloadAction<IConversation>
    ) => {
      return {
        ...state,
        minimizeConversation: state.minimizeConversation.filter(
          (conversation) =>
            conversation.conversationId !== action.payload.conversationId
        ),
      };
    },

    setEmptyChoosenConversations: (state: IGlobalSilce) => {
      return {
        ...state,
        choosendConversation: [],
      };
    },
    setLocale: (state: IGlobalSilce, action: PayloadAction<'en' | 'vi'>) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

export default globalSlice.reducer;
export const {
  addChoosenConversation,
  removeChoosenConversation,
  setEmptyChoosenConversations,
  addMinimizeConversation,
  removeMinimizeConversation,
  setLocale,
} = globalSlice.actions;
