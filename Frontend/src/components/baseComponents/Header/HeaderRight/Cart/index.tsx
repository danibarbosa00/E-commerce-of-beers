import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartProps  extends CartLogicProps{}

const Cart: React.FC<CartProps> = ({}) => {
        const {} = useCartLogic({})
  return (
    <div className='cart'>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>0.00$</span>
    </div>
  );
};
interface CartLogicProps{}
const useCartLogic = ({}: CartLogicProps) => {
    return {}
}

export default Cart



