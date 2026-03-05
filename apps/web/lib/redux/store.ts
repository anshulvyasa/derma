import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CountReducer, { COUNT } from "./features/count/index"
import { persistMiddleware } from './middleware'

const RootReducer = combineReducers({
    count: CountReducer
})

export const makeStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: RootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistMiddleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = AppStore['dispatch']