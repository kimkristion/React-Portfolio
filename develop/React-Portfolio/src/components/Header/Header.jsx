// Header.js
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
      <div className='headerName'>
      <Link to="/home">Kristion Kim: My Portfolio</Link>
      </div>
      <Navigation />
      </header>
    </div>
  );
};


export default Header;