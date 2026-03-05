import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loadState } from "../../load-initial-state";

export interface COUNT {
    count: number
}


const initialState: COUNT = {
    count: 0
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increaseCount(state) {
            state.count += 1;
        },
        decrementCount(state) {
            state.count -= 1;
        },
        initializeState(state, action: PayloadAction<COUNT>) {
            return action.payload;
        }
    }
})


export default countSlice.reducer;
export const { increaseCount, decrementCount,initializeState } = countSlice.actions;