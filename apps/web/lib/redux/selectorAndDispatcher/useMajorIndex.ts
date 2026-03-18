import { initializeMajorIndexReducer, MajorIndex, updateMajorIndexReducer } from "../features/majorIndex";
import { useAppDispatch, useAppSelector } from "../hooks"

export const useMajorIndex = () => {
    const majorIndex = useAppSelector(state => state.majorIndex);
    const dispatch = useAppDispatch();

    const updateMajorIndex = (newIdx: number) => {
        dispatch(updateMajorIndexReducer(newIdx));
    }

    const initializeMajorIndex = (state: MajorIndex) => {
        dispatch(initializeMajorIndexReducer(state));
    }

    return { majorIndex, updateMajorIndex ,initializeMajorIndex}
}