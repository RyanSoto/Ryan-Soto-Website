import '../styles/Button.css';
import { Link } from '@remix-run/react';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const LINK = ['/Aboutme', '/Resume', '/Portfolio', '/'];

export const Button = ({
  children,
  type,
  onClick,
  buttonLink,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonLink = LINK.includes(buttonLink) ? buttonLink : LINK[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to= {checkButtonLink} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }