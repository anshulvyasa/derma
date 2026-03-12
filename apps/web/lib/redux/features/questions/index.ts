import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Questions {
    questionIndex: number;
    selectedOptions: Record<number, number>
}

const initialState: Questions = {
    questionIndex: 0,
    selectedOptions: {}
}

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        // will also be used to update the existing record
        addRecord(state, action: PayloadAction<{ key: number, selectedOption: number }>) {
            state.selectedOptions[action.payload.key] = action.payload.selectedOption;
        },
        updateQuestionIndex(state, action: PayloadAction<number>) {
            state.questionIndex = action.payload;   // updating the Question With The New Index
        },
        clearRecord() {
            return initialState;
        }
    }
})

export default questionSlice.reducer;
export const { addRecord, updateQuestionIndex, clearRecord } = questionSlice.actions;