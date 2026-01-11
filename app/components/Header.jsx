import { useState } from 'react';

export default function Header({ onNavigate, currentPage }) {
    const handleNavigation = (page) => {
        if (onNavigate) {
            onNavigate(page);
        }
    };

    return(
        <div className='header-btns'>
            <div 
            onClick={() => handleNavigation('home')}
            style={{
            cursor: 'pointer',
            }}
            >
            <h3 className="future">Ryan Soto</h3>
            <h1 className="cop">Software Engineer</h1>
            </div>
            {onNavigate && (
                <div className='nav-buttons'>
                    {/* <button onClick={() => handleNavigation('home')} className={`btn btn--outline btn--large ${currentPage === 'home' ? 'active' : ''}`}><p className="vectro vectro-body">Home</p></button> */}
                    <button onClick={() => handleNavigation('aboutme')} className={`btn btn--outline btn--large ${currentPage === 'aboutme' ? 'active' : ''}`}><p className="vectro vectro-body">About Me</p></button>
                    <button onClick={() => handleNavigation('portfolio')} className={`btn btn--outline btn--large ${currentPage === 'portfolio' ? 'active' : ''}`}><p className="vectro vectro-body">Portfolio</p></button>
                    <button onClick={() => handleNavigation('resume')} className={`btn btn--outline btn--large ${currentPage === 'resume' ? 'active' : ''}`}><p className="vectro vectro-body">Résumé</p></button>
                </div>
            )}
        </div> 
    )
}

