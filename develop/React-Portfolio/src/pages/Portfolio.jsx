// This is a static page mocking an "About Us" section for our fake user data
import Projects from '../components/Projects/Project'
export default function PortfolioPage() {
    return (
        <div className="container pt-4">
          <h2>Portfolio</h2>
          <Projects />
        </div>
      );
  }
  