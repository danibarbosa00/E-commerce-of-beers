import { Link } from 'react-router-dom';
interface IndividualProductProps {
  id: number;
  name: string;
  url: string;
  price: number;
}

export const IndividualProduct: React.FC<IndividualProductProps> = ({
  id,
  name,
  url,
  price,
}) => {
  return (
    <Link className='individual-product' to={'/product/' + id}>
      <div>
        <p>+</p>
        <img src={url} alt={name}></img>
      </div>
      <p>{name}</p>
      <p>{price} $</p>
    </Link>
    
  );
};
