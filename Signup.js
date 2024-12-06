import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import './App.css';


function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    country: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChanges = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allFieldsFilled = Object.values(values).every(value => value.trim() !== '');

    if (!allFieldsFilled) {
      setSubmissionStatus('Please fill out all fields.');
      return;
    }

    axios.post('http://localhost:8081/students', values)
      .then(res => {
        setSubmissionStatus('Registered Successfully!');
      })
      .catch(err => {
        setSubmissionStatus('Submission failed. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className="container">
     
      <div className="card">
        <h2>Sign-Up</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={values.name}
            onChange={handleChanges}
            className="input"
          />


          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={handleChanges}
            className="input"
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={values.phone}
            onChange={handleChanges}
            className="input"
          />

          <input
            type="text"
            placeholder="Enter Program"
            name="program"
            value={values.program}
            onChange={handleChanges}
            className="input"
          />

          <input
            type="text"
            placeholder="Enter Country"
            name="country"
            value={values.country}
            onChange={handleChanges}
            className="input"
          />


          <button type="submit" className="button">Sign Up</button>
        </form>

        
        {submissionStatus && (
          <p className={`status ${submissionStatus.includes('Successfully') ? 'success' : 'error'}`}>
            {submissionStatus}
          </p>
        )}
      </div>

      
      <video
        id="cornerVideo"
        className="corner-video"
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
      >
        <source src="/videeo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="image-container">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
        <img src="image5.jpg" alt="Image 5" />
      </div>
      
    </div>
  );
}

export default Signup;
