import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConversation } from "../interfaces";
interface IGlobalSilce {
    choosendConversation: IConversation[];
    locale: "en" | "vi";
}
const initialState: IGlobalSilce = {
    choosendConversation: [
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f2", name: "John Smith123", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '4',
        },
    ],
    locale: "en"
}

const globalSlice = createSlice({
    name: "globalSlice",
    initialState,
    reducers: {
        addChoosenConversation: (state: IGlobalSilce, action: PayloadAction<IConversation>) => {
            // let isExist = false;
            // const xxx = state.choosendConversation;
            if (state.choosendConversation.length === 3) {
                state.choosendConversation.splice(-1, 1);
                state.choosendConversation.push(action.payload);
            } else {
                state.choosendConversation.push(action.payload);
            }
        },
        removeChoosenConversation: (state: IGlobalSilce, action: PayloadAction<IConversation>) => {
            return {
                ...state,
                choosendConversation: state.choosendConversation.filter((conversation) => conversation._id !== action.payload._id)
            }
        },
        setEmptyChoosenConversations: (state: IGlobalSilce) => {
            return {
                ...state,
                choosendConversation: []
            }
        },
        setLocale: (state: IGlobalSilce, action: PayloadAction<"en" | "vi">) => {
            return {
                ...state,
                locale: action.payload
            }
        }

    }
})

export default globalSlice.reducer;
export const { addChoosenConversation, removeChoosenConversation, setEmptyChoosenConversations, setLocale } = globalSlice.actions;