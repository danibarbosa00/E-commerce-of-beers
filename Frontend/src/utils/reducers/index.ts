import { combineReducers, configureStore } from '@reduxjs/toolkit'

export interface AllReduxPayloads {
}

const rootReducer = combineReducers({
})

const store = configureStore({reducer: rootReducer})

export default store