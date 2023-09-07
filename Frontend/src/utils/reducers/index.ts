import { combineReducers, configureStore } from '@reduxjs/toolkit'
import example,{ExamplePayload} from './example'
import shoppingCart, { ShoppingCartPayload } from './shoppingCart'
import user,{ UserPayload } from './user'

export interface AllReduxPayloads {
    example:ExamplePayload
    shoppingCart:ShoppingCartPayload
    user: UserPayload
}

const rootReducer = combineReducers({
    example,
    shoppingCart,
    // user

})

const store = configureStore({reducer: rootReducer})

export default store