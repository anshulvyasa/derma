import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface MajorIndex {
    majorIndex: number
}

const initialState: MajorIndex = {
    majorIndex: 0
}

const countSlice = createSlice({
    name: "majorIndex",
    initialState,
    reducers: {
        updateMajorIndexReducer(state, action: PayloadAction<number>) {
            state.majorIndex = action.payload;
        },
        initializeMajorIndexReducer(state, action: PayloadAction<MajorIndex>) {
            return action.payload;
        }
    }
})


export default countSlice.reducer;
export const { updateMajorIndexReducer, initializeMajorIndexReducer } = countSlice.actions;