import { useAppDispatch, useAppSelector } from "../hooks"
import { CustomerPersonalInfo, Gender, initializePersonalInfoReducer, updateAgeReducer, updateGenderReducer, updateNameReducer, updatePhoneReducer } from '../features/personalInfo/index'

export const usePersonalInfo = () => {
    const personalInfo = useAppSelector(state => state.personalInfo);

    const dispatch = useAppDispatch();

    const updateName = (newName: string) => {
        dispatch(updateNameReducer(newName));
    }

    const updateAge = (newAge: number | undefined) => {
        dispatch(updateAgeReducer(newAge));
    }

    const updatePhone = (newPhoneNumber: string) => {
        dispatch(updatePhoneReducer(newPhoneNumber))
    }

    const updateGender = (gender: Gender | undefined) => {
        dispatch(updateGenderReducer(gender))
    }

    const initializePersonalInfo = (info: CustomerPersonalInfo | null) => {
        dispatch(initializePersonalInfoReducer(info));
    }


    return { personalInfo, updateName, updateAge, updatePhone, updateGender, initializePersonalInfo };
}