"use client";

import { useEffect, useState } from "react";
import { decrementCount, increaseCount, initializeState } from "../../../lib/redux/features/count";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { loadState } from "../../../lib/redux/load-initial-state";

const HairTreatement = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(state => state.count.count);
    const [loading, setIsLoading] = useState<boolean>(true);

    // loading initial State
    useEffect(() => {
        const countState = loadState();


        dispatch(initializeState(countState));

        setIsLoading(false);
    }, [])

    if (loading) return <div>Loading....</div>

    return (
        <div>
            <h1>Count is {selector}</h1>

            <button onClick={() => dispatch(increaseCount())}>Increase</button>\
            <button onClick={() => dispatch(decrementCount())}>Decrease</button>
        </div>

    )
}

export default HairTreatement;