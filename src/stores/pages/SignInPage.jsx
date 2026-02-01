import React, { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
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

      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Sign In</button>
      </form>

      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignInPage;
