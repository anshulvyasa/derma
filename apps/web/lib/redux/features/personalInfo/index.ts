import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHERS = "OTHERS"
}

export interface CustomerPersonalInfo {
    name: string,
    phone: string,
    age: number | undefined,
    gender: Gender | undefined
}

const initialState: CustomerPersonalInfo = {
    name: "",
    phone: "",
    age: undefined,
    gender: undefined
}

export const personalInfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        updateNameReducer(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        updatePhoneReducer(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        updateAgeReducer(state, action: PayloadAction<number | undefined>) {
            state.age = action.payload;
        },
        updateGenderReducer(state, action: PayloadAction<Gender | undefined>) {
            state.gender = action.payload;
        },
        clearPersonalInfo() {
            return initialState;
        },
        initializePersonalInfoReducer(state, action: PayloadAction<CustomerPersonalInfo>) {
            return action.payload;
        }
    }
})


export default personalInfoSlice.reducer;
export const { updateAgeReducer, updateGenderReducer, updateNameReducer, updatePhoneReducer, clearPersonalInfo,initializePersonalInfoReducer } = personalInfoSlice.actions;
