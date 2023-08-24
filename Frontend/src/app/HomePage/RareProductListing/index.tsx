import { useCallback, useEffect, useState } from 'react';
import './rareProductsListing.sass';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { RareProduct } from './types';
import { IndividualProduct } from '../../../components/specificComponents/IndividualProduct';
interface RareProductsListingProps extends RareProductsListingLogicProps {}

const RareProductsListing: React.FC<RareProductsListingProps> = ({}) => {
  const { rareProducts } = useRareProductsListingLogic({});
  const renderThis: JSX.Element[] = [];

  if (rareProducts) {
    for (const element of rareProducts) {
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
     <div className='rare-products-listing-parent'>
      <h2 className='rare-products-listing-title'>Rare products</h2>
      <div className='rare-product-listing'>{renderThis}</div>
      </div>
  );
};

interface RareProductsListingLogicProps {}

const useRareProductsListingLogic = ({}: RareProductsListingLogicProps) => {
  const [rareProducts, setRareProducts] = useState<null | RareProduct[]>(null);
  const getData = useCallback(async () => {
    const data = await getDataApiJSON('/api/product/getAllProducts', {
      limit: 3,
      order: [['price', 'DESC']],
    });
    setRareProducts(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return { rareProducts };
};


export default RareProductsListing;
