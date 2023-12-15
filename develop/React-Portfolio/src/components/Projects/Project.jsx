import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects-container">

      <div className="image-container">
      <img src='develop/React-Portfolio/dist/assets/javascriptQuiz.png' alt='javascript quiz' />
          <div className="overlay">
          <Link to='https://kimkristion.github.io/JavaScript-Quiz/'><h2>JavaScript Quiz</h2></Link>
            <Link to='https://github.com/kimkristion/JavaScript-Quiz'><img src='./src/assets/githubLogo.png' alt='github overlay image' /></Link>
          </div>
      </div>

      <div className="image-container">
          <img src='./src/assets/dynamicScheduler.png' alt='weather application' />
            <div className="overlay">
              <Link to='https://kimkristion.github.io/Scheduling-Calendar/'><h2>Scheduling Calendar</h2></Link>
              <Link to='https://github.com/kimkristion/Scheduling-Calendar'><img src='./src/assets/githubLogo.png' alt='github overlay image' /></Link>
            </div>
      </div>

      <div className="image-container">
          <img src='./src/assets/regexTutorial.png' alt='weather application' />
            <div className="overlay">
              <Link to='https://gist.github.com/kimkristion/70d021f14fcc813434885bfc9882adb4'><h2>Regex Tutorial</h2></Link>
              <Link to='https://github.com/kimkristion/Regex-Tutorial'><img src='./src/assets/githubLogo.png' alt='github overlay image' /></Link>
            </div>
      </div>

      <div className="image-container">
          <img src='./src/assets/weatherForecast.png' alt='weather application' />
          <div className="overlay">
            <Link to='https://kimkristion.github.io/weather-application/'><h2>Weather Forecast</h2></Link>
            <Link to='https://github.com/kimkristion/weather-application'><img src='./src/assets/githubLogo.png' alt='github overlay image' /></Link>
          </div>
      </div>

      <div className="image-container">
          <img src='./src/assets/fmood.png' alt='fmood' />
          <div className="overlay">
            <Link to='https://kimkristion.github.io/Fmood-the-Diatry/'><h2>Fmood The Diatry</h2></Link>
            <Link to='https://github.com/kimkristion/Fmood-the-Diatry'><img src='./src/assets/githubLogo.png' alt='github overlay image' /></Link>
          </div>
      </div>

      <div className="image-container">
          <img src='./src/assets/journeyjotter.png' alt='journey jotter' />
          <div className="overlay">
            <Link to='https://journey-jotter-5bbd0d94cd1b.herokuapp.com/login'><h2>Journey Jotter</h2></Link>
            <Link to='https://github.com/kimkristion/JourneyJotter'><img src='./src/assets/githubLogo.png' alt='github overlay image' /></Link>
          </div>
      </div>

    </div>
  );
}

export default Projects;
