export interface ShoppingCart {
    UserId?: number;
    price: number;
    id: number;
    ShoppingCartProducts: ShoppingCartProduct[];
}

export interface ShoppingCartProduct {
    ProductId: number;
    ShoppingCartId: number;
    quantity: number;
    price: number;
}

export interface ShoppingAddCartAction {
    type: 'SHOPPINGCARTS_ADDCART';
    payload: { ProductId: number; price: number };
}
export interface ChangeShoppingCartAction {
    type: 'SHOPPINGCARTS_CHANGECART';
    payload: ShoppingCart;
}

export type ShoppingCartPayload = ShoppingCart | null;

export default function shoppingCart(
    state: ShoppingCartPayload = null,
    action: ShoppingAddCartAction | ChangeShoppingCartAction
): ShoppingCart | null {
    switch (action.type) {
        case 'SHOPPINGCARTS_ADDCART':
            if (!state) {
                return state;
            }
            const updatedPrice = state.price + action.payload.price;
            const updatedProducts = [
                ...state.ShoppingCartProducts,
                {
                    ProductId: action.payload.ProductId,
                    ShoppingCartId: state.id,
                    price: action.payload.price,
                    quantity: 1
                }
            ];
            return {
                ...state,
                price: updatedPrice,
                ShoppingCartProducts: updatedProducts
            };

        case 'SHOPPINGCARTS_CHANGECART':
            return state = action.payload;

        default:
            return state;
    }
}
