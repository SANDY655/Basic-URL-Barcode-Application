import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../css/Feedback.css'; // Import the updated CSS

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && feedback && name) {
      setSuccessMessage("Thank you for your feedback!");
      setErrorMessage('');
      // Add logic to handle feedback submission here
    } else {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage('');
    }
  };

  return (
    <Container className="feedback-container">
      <h2 className="feedback-title">Feedback</h2>
      <Form onSubmit={handleSubmit} className="feedback-form">
        <div className="feedback-form-row">
          <Form.Control 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Control 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Form.Control 
          as="textarea" 
          placeholder="Your Feedback" 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          className="feedback-submit-btn">
          Submit Feedback
        </Button>
      </Form>
      {successMessage && <p className="feedback-success-message">{successMessage}</p>}
      {errorMessage && <p className="feedback-error-message">{errorMessage}</p>}
    </Container>
  );
};

export default Feedback;
