import React, { useState } from 'react';
import './EmailSubscription.css'; 

const EmailSubscription = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to receive marketing communications.');
      return;
    }
    // handle actual submission here
    alert('Subscribed successfully!');
  };

  return (
    <section className="email-section">
      <h2>Subscribe to our emails</h2>
      <p>Be the first to know about new collections and exclusive offers.</p>
      <form onSubmit={handleSubmit} className="email-form">
        <input type="text" placeholder="First name" required />
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">SIGN UP</button>
      </form>
      <p className="small-text">
        By clicking 'Sign up' you agree that you have read and understood Koala’s{' '}
        <a href="#">Privacy Policy</a>.
      </p>
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to receive marketing communications and product updates from Koala.
      </label>
    </section>
  );
};

export default EmailSubscription;
