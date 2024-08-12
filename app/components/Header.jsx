import { Button } from './Button';

export default function Header() {

    return(
        <div className='header-btns'>
            <Button
            buttonLink='/'
            // className=''
            // buttonStyle=''
            // buttonSize=''
            >
            <h3 className="future">Ryan Soto</h3>
            <h1 className="cop">Software Engineer</h1>
            </Button>
        </div> 
    )
}

