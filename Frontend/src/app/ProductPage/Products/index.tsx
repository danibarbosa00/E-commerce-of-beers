import { useParams } from 'react-router'
import { useCallback, useEffect, useState } from 'react';
import { SingleIndividual } from './types';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import './products.sass'

interface ProductProps extends ProductLogicProps {}

const Product: React.FC<ProductProps> = ({}) => {
const {product} = useProductLogic({})
if(product){
  return(
        <SingleProduct
          id={product.id}
          name={product.name}
          url={product.url}
          key={product.id}
          price={product.price}
          description={product.description}
        />)
}
    return null
}
interface ProductLogicProps {}

const useProductLogic = ({}: ProductLogicProps) => {
    const {id}= useParams()
    const [product, setProduct] = useState<null|SingleIndividual>(null)
    const getData = useCallback(async ()=>{
    const data= await getDataApiJSON('/api/product/getProductInstance',{id})
     setProduct(data)
},[id])
    useEffect(() => {
    getData();
  }, [getData]);
    return {product}
}


 const SingleProduct: React.FC<SingleIndividual> = ({
  name,
  price,
  description,
  url,
 }) => {
    return ( <div className='individual-product-category'>
      <div className='left-individual-product-category'>
        <img src={url} alt={name} />
      </div>
      <div className='right-individual-product-category'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: {price} $</p>
        <button>Añadir al carrito</button>
      </div>
    </div>)
}


export default Product