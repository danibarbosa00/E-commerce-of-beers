import './cartPage.sass';

interface CartProps extends CartLogicProps {}

const Cart: React.FC<CartProps> = ({}) => {
  const {} = useCartLogic({});
  return null;
};

interface CartLogicProps {}

const useCartLogic = ({}: CartLogicProps) => {
  return {};
};

export default Cart;
