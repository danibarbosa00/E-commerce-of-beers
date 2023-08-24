import ProductsListing from '../../components/specificComponents/ProductsListing';
import Product from './Products';
import './productPage.sass';

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = ({}) => {
  return (
    <div className='productPage'>
      <Product/>
      <ProductsListing/>
    </div>
  )
}

export default ProductPage