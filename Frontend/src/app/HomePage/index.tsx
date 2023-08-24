import BannerCerveza from './BannerCerveza';
import NewProductsListing from './NewProductListing';
import ProductsListing from '../../components/specificComponents/ProductsListing';
import RareProductsListing from './RareProductListing';
import './homePage.sass'

interface HomePageProps extends HomePageLogicProps {}

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

interface HomePageLogicProps {}

export default HomePage;
