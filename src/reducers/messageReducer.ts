import { createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../interfaces";

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
                createAt: Date.now(),
                senderId: "0",
                text: "Xin chao",
                type: "text"
            }
        ]
    },
}

const messageSlice = createSlice({
    name: "message slice",
    initialState,
    reducers: {}
})

export default messageSlice.reducer;
export const { } = messageSlice.actions