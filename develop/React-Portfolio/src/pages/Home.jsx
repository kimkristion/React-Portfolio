import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="container pt-4">
          <h2>Home</h2>
          <p>
          Hello and welcome to my digital space! I&rsquo;m Kristion Kim, a dedicated student eagerly anticipating my certification of completion in a comprehensive full-stack developer program. As a passionate learner, I aspire to delve deeper into computer science and web development.
          </p>
          
          <p>
          Navigate through my portfolio, where I&rsquo;ve curated sections including <span className="section">About</span>, <span className="section">Portfolio</span>, <span className="section">Contact</span>, and <span className="section">Resume</span>. Each segment provides a glimpse into who I am, the projects I&rsquo;ve undertaken, and how you can connect with me.
          </p>

          <p>Explore the diverse range of projects in my portfolio section, each representing a unique chapter in my coding adventure. From web applications to dynamic interfaces, view the culmination of my skills and creativity.

          </p>

          <p>Ready to connect? In the <Link to="/contact"><span className="section">Contact</span></Link> section, share your name, email, and a message, and let&rsquo;s kickstart a conversation. Whether it&rsquo;s about collaboration, opportunities, or just a friendly chat, I&rsquo;m here and excited to engage with you.</p>

          <p>Join me as I continue to learn, build, and evolve in the ever-exciting world of technology. Your exploration is encouraged, and your inquiries are more than welcome. Let&rsquo;s connect and create something amazing together!</p>
        </div>
      );
}
