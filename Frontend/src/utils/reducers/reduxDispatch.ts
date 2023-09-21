import store from '.'
import { getDataApiJSON } from '../globals/petitions'
import {Example, ExampleAction, ExampleActionSumNumber} from './example'
import { ChangeShoppingCartAction, DeleteShoppingCartProductAction, ShoppingAddCartAction, ShoppingCart } from './shoppingCart'
import { LoadUserAction  } from './user'

//EXAMPLE
export const changeExample =async (example:Example)=>{
    const mydispatch: ExampleAction = {
        type: 'CHANGE_EXAMPLE',
        payload:example
    }
    await store.dispatch(mydispatch)
}
export const changeExampleSumNumber =async ()=>{
    const mydispatch: ExampleActionSumNumber = {
        type: 'CHANGE_EXAMPLE_SUM_NUMBER',
    }
    await store.dispatch(mydispatch)
}

//SHOPPINGCART

export const addToCart = async (ProductId: number,price:number) => {
    const mydispatch:ShoppingAddCartAction={
        type: 'SHOPPINGCARTS_ADDCART',
        payload: {ProductId,price}
    }
    
 const shoppingCart = store.getState().shoppingCart;
    if (shoppingCart) {
        await getDataApiJSON('/api/shoppingCartProduct/createShoppingCartProduct', {
            ShoppingCartId: shoppingCart.id,
            ProductId,
            price,
            quantity: 1
        });
    await store.dispatch(mydispatch)
}
}
export const changeCart = async (params: ShoppingCart) => {
    const mydispatch: ChangeShoppingCartAction = {
        type: 'SHOPPINGCARTS_CHANGECART',
        payload: params
    }
    await store.dispatch(mydispatch);
}

export const deleteToCartProduct = async (ProductId: number) => {
    const mydispatch:DeleteShoppingCartProductAction={
        type: 'SHOPPINGCART_DELETECARTPRODUCT',
        payload: {ProductId}
    }
 const shoppingCart = store.getState().shoppingCart;
    if (shoppingCart) {
        await getDataApiJSON('/api/shoppingCartProduct/deleteShoppingCartProduct', {
            ShoppingCartId: shoppingCart.id,
            ProductId,
        });
    await store.dispatch(mydispatch)
}}

//USER

export const loadUser =  async (id:number,token:string) => {

    const user = await getDataApiJSON('/api/user/getUserInstance',{id})
    const mydispatch: LoadUserAction = {
      type: 'LOAD_USER',
      payload: user,
    };
    await store.dispatch(mydispatch);
    }
