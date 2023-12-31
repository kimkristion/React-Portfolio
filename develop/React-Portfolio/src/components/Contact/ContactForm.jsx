import { useState } from 'react';

const ContactForm = () => {
  // State variables to manage form input values and messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to validate form input
  const validateForm = (name, email, message) => {
    const errors = [];
  

    if (!name.trim()) {
      errors.push('Name is required.');
    }

    if (!email.trim()) {
      errors.push('Email is required.');
    }

    if (!message.trim()) {
      errors.push('Message is required.');
    }
  
    return errors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Using the validate function to validate the user input
    const errors = validateForm(name, email, message);
  
    if (errors.length > 0) {
      setErrorMessage(errors.join(' '));
      return;
    }
  
    // Clear any previous err messages
    setErrorMessage('');
  
    // Send form data to the server using the Fetch API
    const response = await fetch(`https://formspree.io/f/mwkdgrgg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
  
    if (response.ok) {
      console.log('Form submitted successfully!');
      setSuccessMessage('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
      return;
    } else {
      // Handle error, e.g., show an error message
      console.error('Form submission failed');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
