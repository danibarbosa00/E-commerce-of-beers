import './footer.sass';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className='footer'>
      <ul>
        <li>Términos y condiciones</li>
        <li>Contacto</li>
        <li>Política de privacidad</li>
      </ul>
      <p>©Copyright DaniBarbosa</p>
    </footer>
  );
};


export default Footer;