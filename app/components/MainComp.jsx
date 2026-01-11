import { useState } from 'react';
import '../styles/MainComp.css';
import '../styles/Button.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';


export default function MainComp({ initialPage = 'home' }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'aboutme':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'home':
      default:
        return (
          <div className='hero-container'>
            <p className='vectro'><span className='vectro-body'>Software Developer. Game Developer. Memer. Dreamer. </span></p>
          </div>
        );
    }
  };

  return (
    <div className="inner-mainbody-container">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
};