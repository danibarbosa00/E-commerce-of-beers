import UserConnect from '../../../components/specificComponents/ReduxComponents/componentUser';
import { useEffect, useCallback, useState } from 'react';
import './cart.sass';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { CartProduct, ShoppingCartProduct } from './types';
import { IndividualProduct } from '../../../components/specificComponents/IndividualProduct';
import { useParams } from 'react-router';
import { deleteToCartProduct } from '../../../utils/reducers/reduxDispatch';
import CartConnect from '../../../components/baseComponents/Header/HeaderRight/Cart';

interface CartProps extends CartLogicProps {
}

const Cart: React.FC<CartProps> = ({}) => {
  const { InfoCartProducts, cartProducts } = useCartLogic({});
  const renderThis: JSX.Element[] = [];
  if (cartProducts&&InfoCartProducts) {
    for (const element of InfoCartProducts) {
      const cartProduct = cartProducts.find((item) => item.ProductId === element.id);
      renderThis.push(
        <div className='individualProductDelete' key={element.id}>
          <IndividualProduct
            id={element.id}
            name={element.name}
            url={element.url}
            key={element.id}
            price={element.price}
          />
          <p>Quantity: {cartProduct ? cartProduct.quantity : 0}</p>
          <button className='deleteProduct' onClick={() => { deleteToCartProduct(element.id) }}>Delete</button>
        </div>
      );
    }
  }

  return (
    <div className='productsCartInfoUser'>
      <div className='productsUserCart'>
        <p className='pProductsUserCart'>Your Cart:</p>
        {renderThis}
      </div>
      <div className='infoUser'>
        <UserConnect />
        <CartConnect />
      </div>
    </div>
  );
};

interface CartLogicProps {}

const useCartLogic = ({}) => {
  const [cartProducts, setCartProducts] = useState<null | CartProduct[]>(null);
  const [InfoCartProducts, setInfoCartProducts] = useState<null | ShoppingCartProduct[]>(null);
  const { id } = useParams();

  const getData = useCallback(async () => {
    try {
      const cartData = await getDataApiJSON('/api/shoppingCart/getShoppingCartInstance', { id });
      setCartProducts(cartData.ShoppingCartProducts);
      const infoProductsArray = [];
      for (const element of cartData.ShoppingCartProducts) {
        const productId = element.ProductId;
        const productData = await getDataApiJSON('/api/product/getProductInstance', {
          id: productId
        });
        infoProductsArray.push(productData);
      }
      setInfoCartProducts(infoProductsArray)
      return {cartData,};
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { cartProducts,InfoCartProducts};
};



export default Cart;
