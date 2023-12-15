// Footer.jsx
import { Link } from 'react-router-dom';
import githubLogo from '/src/assets/githubLogo.png';
import linkedInLogo from '/src/assets/linkedinLogo.png';
import stackOverflowLogo from '/src/assets/stackOverflow.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <Link to='https://github.com/kimkristion'>
          <img src={githubLogo} alt='github logo' />
        </Link>

        <Link to='https://www.linkedin.com/in/kristion-kim-90062525a/'>
          <img src={linkedInLogo} alt='linkedIn logo' />
        </Link>

        <Link to='https://stackoverflow.com/users/23090552/kristion-kim'>
          <img src={stackOverflowLogo} alt='stackoverflow logo' />
        </Link>
        
       
      </footer>
    </div>
  );
}

export default Footer;
