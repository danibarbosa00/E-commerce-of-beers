import { Link } from 'react-router-dom';
import './footer.sass';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className='footer'>
    <div>
        <nav>
          <a>Terms and Conditions</a>
          <a>Contact</a>
          <a>Privacy Policy</a>
        </nav>
      <p>©Copyright DaniBarbosa2023</p>
    </div>
    <div>
      <nav>
        <Link to={'https://instagram.com'}><img src='/instagram.png' alt='instagram' className='footer-icon'/></Link>
        <Link to={'https://facebook.com'}><img src='/facebook.png' alt='facebook' className='footer-icon'/></Link>
        <Link to={'https://Linkedin.com'}><img src='/linkedin.png' alt='linkedin' className='footer-icon'/></Link>
        <Link to={'https://twitter.com'}><img src='/twitter.png' alt='twitter' className='footer-icon'/></Link>
      </nav>
    </div>
     <div>
      <img src='/descarga.png' alt='e.galicia' />
      <img src='/logoCorona.png' alt='corona' />
      <img src='/Budweiser-logo.jpg' alt='budweiser' />
      <img src='/Miller.logo.png' alt='Miller' />
      <img src='/Carling-Logo.jpg' alt='Carling' />
      <img src='/heineken-logo.png' alt='heineken' />
    </div>
    </footer>

  );
};


export default Footer;