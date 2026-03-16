import { addRecordReducer, updateQuestionIndexReducer, clearQuestionStateReducer, initializeQuestionsReducer, Questions } from "../features/questions";
import { useAppDispatch, useAppSelector } from "../hooks"

export const useQuestions = () => {
    const questionSelector = useAppSelector(state => state.questions);
    const dispatch = useAppDispatch();

    const updateQuestionIndex = (index: number) => {
        dispatch(updateQuestionIndexReducer(index));
    }

    const updateSelectedOption = (key: string, selectedOption: string) => {
        dispatch(addRecordReducer({ key, selectedOption }))
    }

    const clearQuestionsState = () => {
        dispatch(clearQuestionStateReducer())
    }

    const initializeQuestions = (state: Questions) => {
        dispatch(initializeQuestionsReducer(state));
    }

    return { questionSelector, updateQuestionIndex, updateSelectedOption, clearQuestionsState, initializeQuestions }
}