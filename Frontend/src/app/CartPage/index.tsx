import Cart from "./cart"
import './cartPage.sass'

interface CartPageProps {}

export const CartPage: React.FC<CartPageProps> = ({}) => {
    return (
        <div className="cartPage">
            <Cart/>
        </div>
    )
}
