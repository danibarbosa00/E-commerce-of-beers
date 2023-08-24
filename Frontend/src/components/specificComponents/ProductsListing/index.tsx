import { useCallback, useEffect, useState } from 'react';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { Product } from './types';
import ProductsList from '../SomeNewProducts';


const ProductsListing = () => {
  const [products, setProducts] = useState<null | Product[]>(null);
  const getData = useCallback(async () => {
    const data = await getDataApiJSON('/api/product/getAllProducts', {limit:10});
    setProducts(data);
    return data
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
      <ProductsList title={'Some Products'} getData={getData} />
  ) 
    
   };




export default ProductsListing;
