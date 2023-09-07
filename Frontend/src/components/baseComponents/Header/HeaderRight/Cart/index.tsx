import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllReduxPayloads } from "../../../../../utils/reducers";
import { ConnectedProps, connect } from "react-redux";

interface CartProps  extends ReduxCart{
}

const Cart: React.FC<CartProps> = ({shoppingCart}) => {
    console.log(shoppingCart)
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

const cartDispatch = {
}

const mapCartConnector = (state:AllReduxPayloads)=>({shoppingCart:state.shoppingCart})
const cartConnect=connect(mapCartConnector,cartDispatch)
export type ReduxCart = ConnectedProps<typeof cartConnect>

const CartConnect = cartConnect(Cart)

export default CartConnect


