import { isAction, Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const persistMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    const result = next(action)

    if (isAction(action) && action.type.startsWith("count")) {
        const countState = store.getState().count;

        sessionStorage.setItem("count", JSON.stringify(countState))
    }

    return result;
}


