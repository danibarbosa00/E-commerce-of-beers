import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './categoryProduct.sass';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { CategoryProductTy } from './types';
import { Link } from 'react-router-dom';

interface CategoryProductProps extends CategoryProductLogicProps {
}
const CategoryProduct: React.FC<CategoryProductProps> = ({}) => {
  const { categoryProducts, } = useCategoryProductLogic({});
  const renderThis: JSX.Element[] = [];
  if (categoryProducts) {
    for (const product of categoryProducts) {
      renderThis.push(
        <IndividualProduct
          id={product.id}
          name={product.name}
          url={product.url}
          key={product.id}
          price={product.price}
          description={product.description}
        />
      );
    }
  }

  return (  
      <div className='product-category'>{renderThis}</div>
  );
};

interface CategoryProductLogicProps {}

const useCategoryProductLogic = ({}: CategoryProductLogicProps) => {
  const { id } = useParams();
  const [categoryProducts, setCategoryProducts] = useState <null | CategoryProductTy[]>(null);

  const getData = useCallback(async () => {
    const data = await getDataApiJSON('/api/product/getAllProducts', {
      where:{
        CategoryId: id
      }
    });
    setCategoryProducts(data);
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { categoryProducts, };
};

const IndividualProduct: React.FC<CategoryProductTy> = ({
  id,
  name,
  price,
  description,
  url,
}) => {
  return (
    <Link className='individual-product-category' to={'/product/' + id}>
      <h2>{name}</h2>
      <img src={url} alt={name} />
      <p>{description}</p>
      <p>Price: {price} $</p>
    </Link>
  );
};

export default CategoryProduct;
