// This is a static page mocking an "About Us" section for our fake user data
import ContactForm from '../components/Contact/ContactForm'
export default function AboutPage() {
    return (
        <div className="container pt-4">
          <h2>Contact</h2>
          <p>Email: <a href='mailto: kriselijahk1@gmail.com'>Kriselijahk1@gmail.com</a></p>
          <p>Phone: <a href='tel: 9714191763'>(971) 419 - 1763</a></p>
          <div>
            <ContactForm />
          </div>
        </div>
      );
  }
  