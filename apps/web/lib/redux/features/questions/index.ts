import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Questions {
    questionIndex: number;
    selectedOptions: Record<string, string>
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
        addRecordReducer(state, action: PayloadAction<{ key: string, selectedOption: string }>) {
            state.selectedOptions[action.payload.key] = action.payload.selectedOption;
        },
        updateQuestionIndexReducer(state, action: PayloadAction<number>) {
            state.questionIndex = action.payload;   // updating the Question With The New Index
        },
        clearQuestionStateReducer() {
            return initialState;
        },
        initializeQuestionsReducer(state, action: PayloadAction<Questions>) {
            return action.payload;
        }
    }
})

export default questionSlice.reducer;
export const { addRecordReducer, updateQuestionIndexReducer, clearQuestionStateReducer, initializeQuestionsReducer } = questionSlice.actions;