import HeaderRight from './HeaderRight';
import { Link } from 'react-router-dom';
import './header.sass';

interface HeaderProps {}
const Header: React.FC<HeaderProps> = ({}) => {

  return (
    <div className='header'>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};

interface HeaderLeftProps {}
const HeaderLeft: React.FC<HeaderLeftProps> = ({}) => {
  return <div className='header-left'></div>;
};

interface HeaderCenterProps {}
const HeaderCenter: React.FC<HeaderCenterProps> = ({}) => {
  return (
    <Link className='header-center' to={'/'}>
      <img
        className='logo'
        src='https://img.freepik.com/iconos-gratis/diamante_318-195446.jpg?size=626&ext=jpg&ga=GA1.2.1173225661.1691692722&semt=ais' alt='logo'
      />
    </Link>
  );
};

export default Header;
