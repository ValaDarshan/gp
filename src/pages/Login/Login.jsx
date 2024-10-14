import React, { useState } from 'react';
import './Login.css' // Adjust your CSS import path if necessary
import authData from '../../data/auth.json';  // Import JSON file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('Fetched auth data:', authData);
    console.log('Entered email:', email);
    console.log('Entered password:', password);

    // Compare input with fetched data
    if (authData.email === email && authData.password === password) {
      alert('Login successful!');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <form className="wrapper" onSubmit={(e) => e.preventDefault()}>
      <h2>LOGIN</h2>
      <section className="group">
        <input
          type="text"
          size="30"
          className="input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email" className="label">
          Email
        </label>
      </section>
      <section className="group">
        <input
          type="password"
          minLength="8"
          className="input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password" className="label">
          Password
        </label>
      </section>
      {error && <p className="error">{error}</p>}
      <button type="button" className="btn" onClick={handleLogin}>
        LOGIN
      </button>
      <span className="footer"></span>
    </form>
  );
};

export default Login;
