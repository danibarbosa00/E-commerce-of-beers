export interface ShoppingCartProduct {
  id: number;
  name: string;
  url: string;
  price: number;
}

export interface CartProduct {
  quantity: number;
  price:number;
  ProductId: number;
  ShoppingCartId: number;
}
