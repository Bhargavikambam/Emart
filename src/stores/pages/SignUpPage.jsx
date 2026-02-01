import React, { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="authPage">
      {/* Inline CSS */}
      <style>{`
        .authPage {
          max-width: 400px;
          margin: 50px auto;
          padding: 30px;
          border: 1px solid #ccc;
          border-radius: 8px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .authPage h2 {
          margin-bottom: 20px;
        }
        .authPage form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .authPage input {
          padding: 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .authPage button {
          padding: 10px;
          background-color: #333;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .authPage button:hover {
          background-color: #555;
        }
        .authPage p {
          margin-top: 15px;
          font-size: 14px;
        }
        .authPage a {
          color: #333;
          text-decoration: none;
        }
        .authPage a:hover {
          text-decoration: underline;
        }
      `}</style>

      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpPage;
