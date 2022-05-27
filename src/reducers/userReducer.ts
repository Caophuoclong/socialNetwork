import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";

const initialState: IUser = {
    imgUrl: "https://images.unsplash.com/photo-1653594964387-a26001bc8921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "John Smith",
    username: "johhnsmit"
}

const userSlice = createSlice({
    name: "user slice",
    initialState,
    reducers: {}
})

export default userSlice.reducer;
export const { } = userSlice.actions;