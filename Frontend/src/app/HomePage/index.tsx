import BannerCerveza from './BannerCerveza';
import NewProductsListing from './NewProductListing';
import ProductsListing from '../../components/specificComponents/ProductsListing';
import RareProductsListing from './RareProductListing';
import './homePage.sass'
import ProductLastMonth from './ProductLastMonth';

interface HomePageProps  {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div className='homePage'>
        <NewProductsListing /> 
        <BannerCerveza />
        <ProductsListing />
        <RareProductsListing />
        <ProductLastMonth/>
    </div>
  );
};




export default HomePage;
