import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllReduxPayloads } from "../../../../../utils/reducers";
import { ConnectedProps, connect } from "react-redux";
import { Link } from "react-router-dom";

interface CartProps  extends ReduxCart{
}

const Cart: React.FC<CartProps> = ({shoppingCart}) => {
        const {} = useCartLogic({})
  return (
    <div className='cart'>
      <FontAwesomeIcon icon={faCartShopping} />
      <Link to={'/Cart/'+ shoppingCart?.id}><span>{shoppingCart?.price} $</span></Link>
    </div>
  );
};
interface CartLogicProps{}
const useCartLogic = ({}: CartLogicProps) => {
    return {}
}

const cartDispatch = {
}

const mapCartConnector = (state:AllReduxPayloads)=>({shoppingCart:state.shoppingCart})
const cartConnect=connect(mapCartConnector,cartDispatch)
export type ReduxCart = ConnectedProps<typeof cartConnect>

const CartConnect = cartConnect(Cart)

export default CartConnect


