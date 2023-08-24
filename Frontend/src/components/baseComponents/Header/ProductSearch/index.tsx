import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { getDataApiJSON } from '../../../../utils/globals/petitions';
import { ProductsName } from './types';
import { Link } from 'react-router-dom';
import './productSearch.sass';

const ProductSearch: React.FC = () => {
  const { open, setOpen, productsName, name, setName } = useProductSearchLogic();
  return (
    <div className='product-search'>
      <FontAwesomeIcon icon={faSearch} onClick={() => setOpen((old) => !old)} />
      {open ? <ProductSearchModal productsName={productsName} name={name} setName={setName} setOpen={setOpen} /> : null}
    </div>
  );
};

interface ProductSearchModalProps extends useProductSearchProps  {
  productsName: ProductsName[] | null;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductSearchModal: React.FC<ProductSearchModalProps> = ({ productsName, name, setName, setOpen }) => {
  const renderProducts: JSX.Element[] = [];

  if (productsName && productsName.length > 0) {
    for (const product of productsName) {
      renderProducts.push(
        <Link
          className='product-productSearch'
          to={'/product/' + product.id}
          key={product.id}
          onClick={() => setOpen(false)}
        >
          <div className='name-productSearch'>{product.name}</div>
          <div><img src={product.url} alt={product.name} className='img-productSearch' /></div>
        </Link>
      );
    }
  }

  return (
    <>
      <div className='product-search-modal'>
        <input type='text' placeholder={'Product'} value={name} onChange={(e) => setName(e.target.value)} />
        <div className='container-productSearch'>
          {renderProducts}
        </div>
      </div>
    </>
  );
};

interface useProductSearchProps {}
const useProductSearchLogic = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [productsName, setProductsName] = useState<ProductsName[] | null>(null); 
  const getData = useCallback(async () => {
     if(name.length>0){
    const data = await getDataApiJSON('/api/product/getAllProductsByName', { name });
    setProductsName(data);
    }
    else setProductsName(null)
  }, [name]);
  useEffect(() => {
    getData();
  }, [getData]);

  return { setOpen, open, productsName, name, setName };
};


export { ProductSearch };

