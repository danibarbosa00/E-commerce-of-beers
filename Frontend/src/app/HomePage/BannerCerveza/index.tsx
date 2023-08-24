import './bannerCerveza.sass';

interface BannerCervezaProps {}

const BannerCerveza: React.FC<BannerCervezaProps> = () => {
  return (
      <img className='banner-cerveza' src='/banner-cerveza.jpg' alt='banner-cerveza' />
  );
};

export default BannerCerveza;
