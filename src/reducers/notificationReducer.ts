import { createSlice } from "@reduxjs/toolkit";

interface Interface { }

const initialState: Interface = {}

const notificationSlice = createSlice({
    name: "notification slice",
    initialState,
    reducers: {}
})

export default notificationSlice.reducer;
export const { } = notificationSlice.actions;