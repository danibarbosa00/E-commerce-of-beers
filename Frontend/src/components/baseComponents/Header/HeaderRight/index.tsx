import { ProductSearch } from '../ProductSearch';
import Cart from './Cart';
import UserHeader from './UserHeader';

interface HeaderRightProps {}

const HeaderRight: React.FC<HeaderRightProps> = ({}) => {
  return (
    <div className='header-right'>
      <UserHeader />
      <ProductSearch />
      <Cart />
    </div>
  );
};

export default HeaderRight;

