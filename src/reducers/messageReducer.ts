import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumMessageType, IMessage } from "../interfaces";

interface Interface {
    messages: {
        [key: string]: Array<IMessage>
    }
}
const initialState: Interface = {
    messages: {
        "1": [
            {
                _id: "me",
                conversationId: "1",
                createAt: new Date().toISOString(),
                senderId: "0",
                text: "Xin chao",
                type: EnumMessageType.TEXT,
            }
        ],
        "4": [
            {
                _id: "me",
                conversationId: "4",
                createAt: new Date(1653659441000).toISOString(),
                senderId: "f2",
                text: "Xin chao",
                type: EnumMessageType.TEXT,
            }
        ]
    },
}

const messageSlice = createSlice({
    name: "message slice",
    initialState,
    reducers: {
        addMessages: (state: Interface, action: PayloadAction<IMessage>) => {
            const conversationId = action.payload.conversationId;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [conversationId]: [
                        ...(state.messages[conversationId] ? state.messages[conversationId] : []),
                        action.payload
                    ]
                }
            }
        }
    }
})

export default messageSlice.reducer;
export const { addMessages } = messageSlice.actions