import Cards from "../components/Cards";
import "../styles/Portfolio.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Portfolio() {

  return (

      <div className="container">
        <Header />
        <div className="inner-body-container">
        <div className='portfolio-container'>
        <div className='portfolio'><h1 className="vectro vectro-body">Portfolio</h1></div>
        <div className='portfolio'><h1 className="vectro vectro-body">Check out my projects!</h1></div>
        </div>
          <Cards />
        <Footer />
        </div>
      </div>
  );
}
