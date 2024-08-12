import { Button } from './Button';


export default function Footer() {

    return(
        <div className='footer-btns'>
        <Button
        buttonLink='/Resume'
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
        <p className="vectro vectro-body">Résumé</p>
        </Button>

        <Button
        buttonLink='/Portfolio'
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
        <p className="vectro vectro-body">Portfolio</p>
        </Button>

        <Button
        buttonLink='/Aboutme'
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
        <p className="vectro vectro-body">About Me</p>
        </Button>
    </div> 
    )
}

