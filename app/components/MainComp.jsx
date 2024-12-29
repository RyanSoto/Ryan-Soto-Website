import '../styles/MainComp.css';
import Footer from './Footer';
import Header from './Header';


export default function MainComp() {

  return (
    <div className="inner-mainbody-container">
      <Header />
        <div className='hero-container'>
        <p className='vectro'><span className='vectro-body'>Software Developer. Game Developer. Memer. Dreamer. </span></p>
        </div>
      <Footer />
    </div>
  );
};