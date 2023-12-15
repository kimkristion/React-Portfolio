// This is a static page mocking an "About Us" section for our fake user data
import avatar from '/src/assets/avatar.jpg';

export default function AboutPage() {
    return (
      <div className="container pt-4">
        <h2>About Me</h2>
        
        <div className="avatarContainer">
        <img id="avatar" src={avatar} alt="photo of Kristion Kim"></img>
        </div>
        
        <p>Hello World! I&rsquo;m Kristion Kim, a soon-to-be certified Full-Stack developer eagerly awaiting my certification from the University of Oregon&rsquo;s Coding Bootcamp. My roots are firmly planted in Oregon&mdash; as I graduated Tigard High School in Tigard, Oregon.</p>
        <p>While I&rsquo;m on the brink of earning my certification, I&rsquo;m already utilizing myself by stepping into the world of Full-Stack development. I&rsquo;m currently working on applications that showcase both my Front-End and Back-End skills. Although I&rsquo;m new to this line of work, I beileve being a student has its perks&mdash;I consider myself a versatile asset, ready to absorb new knowledge and apply it as soon as possible.</p>
        <p>My proudest achievement so far? Well, it has to be this portfolio. It&rsquo;s come a long way since the early days of my coding journey. Building a portfolio to showcase my work and identity was one of my first assignments, and I&rsquo;m thrilled with the progress. <a href="https://kimkristion.github.io/Portfolio-Webpage/">(First Porfolio)</a></p>
        <p>Beyond education, I have a deep passion for development. It&rsquo;s like the satisfaction of building furniture&mdash;piecing together elements crafted by others to perfect my own creation. I envision using these skills to make a real impact, whether it&rsquo;s enhancing existing websites or starting from scratch to meet a client&rsquo;s needs.</p>
        <p>If you&rsquo;re curious about me or my skills, feel free to reach out through the contact section in this portfolio. Let&rsquo;s connect!</p>
        </div>
    );
  }
  