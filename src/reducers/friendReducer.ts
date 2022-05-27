import { createSlice } from "@reduxjs/toolkit";
import { IFriend } from "../interfaces";

interface Interface {
    friends: Array<IFriend>;
    loading: boolean;
}

const initialState: Interface = {
    friends: [],
    loading: false,
}

const friendSlice = createSlice({
    name: "friend slice",
    initialState,
    reducers: {}
})

export default friendSlice.reducer;
export const { } = friendSlice.actions;