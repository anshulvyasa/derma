// first visit lib/redux/features section before reading it and observe name field inside each createSlice function of each file

import { isAction, Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CustomerPersonalInfo } from "./features/personalInfo";

// defining Some Contant
const MAJOR_INDEX_PREFIX = "derma-current-major-index";
const PERSONAL_INFO_PREFIX = "derma-current-personal-info";
const QUESTIONS_PREFIX = "derma-current-question-info";


export const persistMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    const result = next(action)

    // trigger when there's a change in major Index state
    if (isAction(action) && action.type.startsWith("majorIndex")) {
        const majorIndexState = store.getState().majorIndex;
        sessionStorage.setItem(MAJOR_INDEX_PREFIX, JSON.stringify(majorIndexState))
    }

    // trigger when there's a change in personalInfo state
    if (isAction(action) && action.type.startsWith("personalInfo")) {
        const personalInfoState = store.getState().personalInfo;
        sessionStorage.setItem(PERSONAL_INFO_PREFIX, JSON.stringify(personalInfoState));
    }

    // trigger when there's a change in questions state 
    if (isAction(action) && action.type.startsWith("questions")) {
        const questionsState = store.getState().questions;
        sessionStorage.setItem(QUESTIONS_PREFIX, JSON.stringify(questionsState));
    }

    return result;
}




//***************************************************************************************************************************************************** */
// Defining The Readers
export const readPersonalInfo = () => {
    const item = sessionStorage.getItem(PERSONAL_INFO_PREFIX);

    if (!item) return null;

    try {
        const res = JSON.parse(item) as CustomerPersonalInfo;
        return res;
    }
    catch (error) {
        console.error('Error Parshing the Personal INfo');
        sessionStorage.removeItem(PERSONAL_INFO_PREFIX);
        return null;
    }
}