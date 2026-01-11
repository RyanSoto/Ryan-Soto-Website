import Cards from "./Cards";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="inner-body-container">
      <div className='portfolio-container'>
        <div className='portfolio'><h1 className="vectro vectro-body">Portfolio</h1></div>
        <div className='portfolio'><h1 className="vectro vectro-body">Check out my projects!</h1></div>
      </div>
      <Cards />
    </div>
  );
}
