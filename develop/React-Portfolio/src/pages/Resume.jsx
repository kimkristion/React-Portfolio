// This is a static page mocking an "About Us" section for our fake user data
import '../pages/Resume/resume.css'
import Resume from '../components/Resume/Resume'

export default function ResumePage() {
    return (
      <div className="container pt-4">
         <h2>Resume</h2>
         <Resume />
        <div className="resumeContainer">
          <h3>Front-End:</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>

          <h3>Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Database Management Systems (DBMS)</li>
          </ul>

          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>

          <h3>Version Control</h3>
          <ul>
            <li>Git</li>
          </ul>

          <h3>APIs</h3>
          <ul>
            <li>RESTful APIs</li>
          </ul>

          <h3>Testing</h3>
          <ul>
            <li>Jest</li>
          </ul>

          <h3>Development Tools</h3>
          <ul>
            <li>VS Code</li>
          </ul>
          
        </div>
        </div>
      );
  }
  