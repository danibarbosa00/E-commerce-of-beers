import store from '.'
import { getDataApiJSON } from '../globals/petitions'
import {Example, ExampleAction, ExampleActionSumNumber} from './example'
import { ChangeShoppingCartAction, ShoppingAddCartAction, ShoppingCart } from './shoppingCart'
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
        await getDataApiJSON('(api/shoppingCartProduct/createShoppingCartProduct', {
            ShoppingCartId: shoppingCart.id,
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

//USER

export const loadUser = (id: number) => async (dispatch: any) => {
  try {
    // Aquí deberías realizar la llamada a la API para obtener los datos del usuario por su id
    const user = await getDataApiJSON("/api/user/getUserInstance",id);
    const mydispatch: LoadUserAction = {
      type: 'LOAD_USER',
      payload: user,
    };
    dispatch(mydispatch);
  } catch (error) {
    // Manejo de errores
  }
};
