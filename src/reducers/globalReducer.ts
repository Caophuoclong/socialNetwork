import { createSlice } from "@reduxjs/toolkit";
import { IGlobalSilce } from "../interfaces";

const initialState: IGlobalSilce = {

}

const globalSlice = createSlice({
    name: "globalSlice",
    initialState,
    reducers: {

    }
})

export default globalSlice.reducer;
export const { } = globalSlice.actions;