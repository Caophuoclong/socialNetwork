import { createSlice } from "@reduxjs/toolkit";
import { IConversation } from "../interfaces";
interface IGlobalSilce {
    choosendConversation: IConversation[];
}
const initialState: IGlobalSilce = {
    choosendConversation: []
}

const globalSlice = createSlice({
    name: "globalSlice",
    initialState,
    reducers: {

    }
})

export default globalSlice.reducer;
export const { } = globalSlice.actions;