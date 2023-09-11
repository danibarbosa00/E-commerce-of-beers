import { useCallback, useEffect, useState } from 'react';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { Product } from '../../../components/specificComponents/ProductsListing/types';
import ProductsList from '../../../components/specificComponents/SomeNewProducts';


const ProductsLastMonth = () => {
  const [products, setProducts] = useState<null | Product[]>(null);
  const getData = useCallback(async () => {
    const data = await getDataApiJSON('/api/product/getAllProducts', {limit:1});
    setProducts(data);
    return data
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
     <> <ProductsList title={'Product of the month'} getData={getData} />
      </>
  ) 
    
   };




export default ProductsLastMonth;
