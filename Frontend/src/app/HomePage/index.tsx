import BannerCerveza from './BannerCerveza';
import NewProductsListing from './NewProductListing';
import ProductsListing from '../../components/specificComponents/ProductsListing';
import RareProductsListing from './RareProductListing';
import './homePage.sass'

interface HomePageProps  {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div className='homePage'>
        <BannerCerveza />
        <ProductsListing />
        <NewProductsListing /> 
        <RareProductsListing />
    </div>
  );
};




export default HomePage;
