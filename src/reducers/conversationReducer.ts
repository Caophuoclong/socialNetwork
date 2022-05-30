import { createSlice } from "@reduxjs/toolkit";
import { IConversation } from "../interfaces";

interface Interface {
    conversations: Array<IConversation>;
    loading: boolean;
}
const initialState: Interface = {
    conversations: [
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
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f3", name: "John Smith1223", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '3',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f4", name: "John ", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '1',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f1", name: "JCakCak", username: "johhnsmit4", imgUrl: "https://picsum.photos/40" }],
            createAt: "asdas",
            type: "private",
            _id: '7',
        },
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
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f3", name: "John Smith1223", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '3',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f4", name: "John ", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '1',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f1", name: "JCakCak", username: "johhnsmit4", imgUrl: "https://picsum.photos/40" }],
            createAt: "asdas",
            type: "private",
            _id: '7',
        },
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
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f3", name: "John Smith1223", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '3',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f4", name: "John ", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '1',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f1", name: "JCakCak", username: "johhnsmit4", imgUrl: "https://picsum.photos/40" }],
            createAt: "asdas",
            type: "private",
            _id: '7',
        },
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
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f3", name: "John Smith1223", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '3',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f4", name: "John ", username: "johhnsmit", imgUrl: "https://picsum.photos/40" }
            ],
            createAt: "asdas",
            type: "private",
            _id: '1',
        },
        {
            imgUrl: 'https://picsum.photos/40',
            participants: [
                { _id: "0", name: "John Smith", username: "johhnsmit", imgUrl: "https://picsum.photos/40" },
                { _id: "f1", name: "JCakCak", username: "johhnsmit4", imgUrl: "https://picsum.photos/40" }],
            createAt: "asdas",
            type: "private",
            _id: '7',
        },
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