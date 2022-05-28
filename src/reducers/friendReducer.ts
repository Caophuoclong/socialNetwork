import { createSlice } from "@reduxjs/toolkit";
import { IFriend } from "../interfaces";

interface Interface {
    friends: Array<IFriend>;
    loading: boolean;
}

const initialState: Interface = {
    friends: [
        {
            _id: "f2",
            imgUrl: "https://picsum.photos/40",
            isOnline: true,
            lastOnline: "Today",
            name: "Long",
            username: "Johnnn"
        },
        { _id: "f4", name: "John ", username: "johhnsmit4", imgUrl: "https://picsum.photos/40", isOnline: false, lastOnline: new Date(1653310252000).toISOString() },
        { _id: "f3", name: "John Smith1223", username: "johhnsmit4", imgUrl: "https://picsum.photos/40", isOnline: false, lastOnline: new Date(1653655852000).toISOString() },
        { _id: "f1", name: "JCakCak", username: "johhnsmit4", imgUrl: "https://picsum.photos/40", isOnline: false, lastOnline: new Date(1653742252000).toISOString() }


    ],
    loading: false,
}

const friendSlice = createSlice({
    name: "friend slice",
    initialState,
    reducers: {}
})

export default friendSlice.reducer;
export const { } = friendSlice.actions;