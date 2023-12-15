// Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <Link to='https://github.com/kimkristion'>
          <img src='./src/assets/githubLogo.png' alt='github logo' />
        </Link>

        <Link to='https://www.linkedin.com/in/kristion-kim-90062525a/'>
          <img src='./src/assets/linkedinLogo.png' alt='linkedIn logo' />
        </Link>

        <Link to='https://stackoverflow.com/users/23090552/kristion-kim'>
          <img src='./src/assets/stackOverflow.png' alt='linkedIn logo' />
        </Link>
        
       
      </footer>
    </div>
  );
}

export default Footer;
