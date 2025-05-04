import { createSlice } from "@reduxjs/toolkit";
import { BackgroundStateType } from "../../../types/types";

const initialState: BackgroundStateType = {
    backgroundUrl: null
}

const backgroundSlice =createSlice({
    name: "backgroundSlice",
    initialState,
    reducers: {
        setBackground: (state,action) => {
            state.backgroundUrl = action.payload
        }
    }
})

export const { setBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer