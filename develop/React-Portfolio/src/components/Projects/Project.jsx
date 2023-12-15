import { Link } from 'react-router-dom';
import javascriptQuiz from '/src/assets/javascriptQuiz.png';
import weatherForecast from '/src/assets/weatherForecast.png';
import dynamicScheduler from '/src/assets/dynamicScheduler.png';
import regexTutorial from '/src/assets/regexTutorial.png';
import fmood from '/src/assets/fmood.png';
import journeyjotter from '/src/assets/journeyjotter.png';
import githubLogo from '/src/assets/githubLogo.png';


const Projects = () => {
  return (
    <div className="projects-container">

      <div className="image-container">
      <img src={javascriptQuiz} alt='javascript quiz' />
          <div className="overlay">
          <Link to='https://kimkristion.github.io/JavaScript-Quiz/'><h2>JavaScript Quiz</h2></Link>
            <Link to='https://github.com/kimkristion/JavaScript-Quiz'><img src={githubLogo} alt='github overlay image' /></Link>
          </div>
      </div>

      <div className="image-container">
          <img src={dynamicScheduler} alt='scheduling calendar' />
            <div className="overlay">
              <Link to='https://kimkristion.github.io/Scheduling-Calendar/'><h2>Scheduling Calendar</h2></Link>
              <Link to='https://github.com/kimkristion/Scheduling-Calendar'><img src={githubLogo} alt='github overlay image' /></Link>
            </div>
      </div>

      <div className="image-container">
          <img src={regexTutorial} alt='regular expression tutorial' />
            <div className="overlay">
              <Link to='https://gist.github.com/kimkristion/70d021f14fcc813434885bfc9882adb4'><h2>Regex Tutorial</h2></Link>
              <Link to='https://github.com/kimkristion/Regex-Tutorial'><img src={githubLogo} alt='github overlay image' /></Link>
            </div>
      </div>

      <div className="image-container">
          <img src={weatherForecast} alt='weather application' />
          <div className="overlay">
            <Link to='https://kimkristion.github.io/weather-application/'><h2>Weather Forecast</h2></Link>
            <Link to='https://github.com/kimkristion/weather-application'><img src={githubLogo} alt='github overlay image' /></Link>
          </div>
      </div>

      <div className="image-container">
          <img src={fmood} alt='fmood' />
          <div className="overlay">
            <Link to='https://kimkristion.github.io/Fmood-the-Diatry/'><h2>Fmood The Diatry</h2></Link>
            <Link to='https://github.com/kimkristion/Fmood-the-Diatry'><img src={githubLogo} alt='github overlay image' /></Link>
          </div>
      </div>

      <div className="image-container">
          <img src={journeyjotter} alt='journey jotter' />
          <div className="overlay">
            <Link to='https://journey-jotter-5bbd0d94cd1b.herokuapp.com/login'><h2>Journey Jotter</h2></Link>
            <Link to='https://github.com/kimkristion/JourneyJotter'><img src={githubLogo} alt='github overlay image' /></Link>
          </div>
      </div>

    </div>
  );
}

export default Projects;
