import { initializeState } from "../features/majorIndex";
import { useAppDispatch, useAppSelector } from "../hooks"

export const useMajorIndex = () => {
    const majorIndex = useAppSelector(state => state.majorIndex);
    const dispatch = useAppDispatch();

    function updateMajorIndex(newIdx: number) {
        dispatch(initializeState({ majorIndex: newIdx }))
    }

    return { majorIndex, updateMajorIndex }
}