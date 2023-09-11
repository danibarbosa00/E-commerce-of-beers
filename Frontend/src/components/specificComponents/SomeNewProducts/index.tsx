import { useState, useEffect } from 'react'; // Asegúrate de importar React
import { IndividualProduct } from '../../../components/specificComponents/IndividualProduct';
import { Product } from './types';
import './someNewProducts.sass'

interface ProductsListProps {
  title: string;
  getData: () => Promise<Product[]>;
}

const ProductsList = ({ title, getData }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[] | null>(null); 
  useEffect(() => {
    async function getDataAsync() {
      const data = await getData();
      setProducts(data);
    }
    getDataAsync()
  }, [getData]);

  const renderThis: JSX.Element[] = [];

  if (products) {
    for (const element of products) {
      renderThis.push(
        <IndividualProduct
          id={element.id}
          name={element.name}
          url={element.url}
          key={element.id}
          price={element.price}
        />
      );
    }
  }

  return (
    <div className='container-someNew-products'>
        <h2 className='products-listing-title'>{title}</h2>
        <div className='products-listing'>  {title==='Product of the month'&&<img src='/icono.primero.jpg' alt='first' className='icon-first'></img>}{renderThis}</div>
    </div>
  );
}

export default ProductsList;
