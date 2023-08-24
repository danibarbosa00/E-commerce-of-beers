import { useEffect, useCallback, useState } from 'react';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import ProductsList from '../../../components/specificComponents/SomeNewProducts';
import { NewProduct } from './types';


const NewProductsListing = () => {
  const [newProducts, setNewProducts] = useState<null | NewProduct[]>(null);

  const getData = useCallback(async () => {
    const data = await getDataApiJSON('/api/product/getAllProducts', {
      limit: 5,
      order: [['createdAt', 'DESC']],
    });
    setNewProducts(data);
    return data; 
  }, []);

  useEffect(() => {
    getData(); 
  }, [getData]);

  return (
      <ProductsList title={'New Products'} getData={getData} />
  );
};

export default NewProductsListing;
