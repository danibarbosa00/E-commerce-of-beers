import './cartPage.sass';

interface CartProps extends CartLogicProps {}

const Cart: React.FC<CartProps> = ({}) => {
  const {} = useCartLogic({});
  return (
    <div>
      <div>Esta es la página del carrito</div>
      <div>Datos del usuario?</div>
      <div>Tienen que salir todos los productos del carro (nombre del producto+price) + botón de borrar producto del carrito</div>
    </div>
  )
};

interface CartLogicProps {}

const useCartLogic = ({}: CartLogicProps) => {
  return {};
};

export default Cart;
