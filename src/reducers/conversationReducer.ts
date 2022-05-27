import { createSlice } from "@reduxjs/toolkit";
import { IConversation } from "../interfaces";

interface Interface {
    conversations: Array<IConversation>;
    loading: boolean;
}
const initialState: Interface = {
    conversations: [
        {
            _id: "1",
            createAt: Date.now().toLocaleString(),
            participants: [
                {
                    _id: "0",
                    imgUrl: "https://images.unsplash.com/photo-1653594964387-a26001bc8921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    name: "John Smith",
                    username: "johhnsmit",
                },
                {
                    _id: "2",
                    imgUrl: "https://images.unsplash.com/photo-1653594964387-a26001bc8921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    name: "John Smith123",
                    username: "johhnsmit",
                },
            ],
            type: "private",
        }
    ],
    loading: false
}
const conversationSlice = createSlice({
    name: "conversation slice",
    initialState,
    reducers: {}
})

export default conversationSlice.reducer;
export const { } = conversationSlice.actions;