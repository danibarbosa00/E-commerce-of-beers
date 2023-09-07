import 'tailwindcss/tailwind.css';
import './app.sass';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './app/HomePage';
import Cart from './app/CartPage';
import Header from './components/baseComponents/Header/index';
import Footer from './components/baseComponents/Footer/footer';
import CategoryPage from './app/CategoryPage';
import ProductPage from './app/ProductPage';
import { CategoriesListing } from './components/specificComponents/CategoriesListing';
import { changeCart } from './utils/reducers/reduxDispatch';
import { getDataApiJSON } from './utils/globals/petitions';

function App() {
  const [loaded, setLoaded] = useState(false);
  const firstLoading = useCallback(async () => {
    setLoaded(true);
    //usuario
    const userId= localStorage.getItem('id')
    if (userId) {
      
    }
    //SHOPPINGCART 
    const shoppingCartId=localStorage.getItem('shoppingCartId')
    if(shoppingCartId){
      const shoppingCart = await getDataApiJSON('/api/shoppingCart/getShoppingCartInstance',{id:shoppingCartId})
      let price=0
      if(shoppingCart && shoppingCart.ShoppingCartProducts ){
        for (const product of shoppingCart.ShoppingCartProducts) {
          price += parseFloat(product.price)
        }
      }
       await changeCart({...shoppingCart,price})
    }
    else
      {const shoppingCart = await getDataApiJSON('/api/shoppingCart/createShoppingCart',{})
      if(shoppingCart){
        localStorage.setItem('shoppingCartId',shoppingCart.id)
         await changeCart({...shoppingCart,price:0})
      }
    }
    
  }, []);

  useEffect(() => {
    firstLoading();
  }, [firstLoading]);

  return (
    <Suspense fallback={<LoadingDiv />}>{loaded && <AppLoaded />}</Suspense>
  );
}

const LoadingDiv: React.FC = () => {
  return (
    <div className='App bg-gradient-to-r from-bg-start via-bg-mid to-bg-end h-screen'>
      <div>Loading</div>
    </div>
  );
};

const AppLoaded: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
    
      <Router>
        <Header />
        <CategoriesListing />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/category/:id' Component={CategoryPage} />
          <Route path='/cart' Component={Cart} />
          <Route path='/product/:id' Component={ProductPage} />
        </Routes>
         <Footer />
      </Router>
    </div>
  );
};

export default App;
