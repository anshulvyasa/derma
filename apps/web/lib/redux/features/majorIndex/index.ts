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
        increaseCount(state) {
            state.majorIndex += 1;
        },
        decrementCount(state) {
            state.majorIndex -= 1;
        },
        initializeState(state, action: PayloadAction<MajorIndex>) {
            return action.payload;
        }
    }
})


export default countSlice.reducer;
export const { increaseCount, decrementCount, initializeState } = countSlice.actions;