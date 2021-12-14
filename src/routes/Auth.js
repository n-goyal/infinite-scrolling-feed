import useLocalStorage from "../hooks/useLocalStorage";
import React from 'react';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Auth() {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useLocalStorage("loginstate", false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
    // set login state in the local storage
    if (username === "foo" && password === "bar") {
      setLoggedIn(true);
      // redirect to home
      navigate('/home');
    }
  };

  const formElement = (
    <form onSubmit={handleSubmit}>
    <label className="input-label" htmlFor="username">
      Username: 
      <input
        
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </label>
    <label className="input-label" htmlFor="password">
      Password: 
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </label>
    <input type="submit" className="login-btn" value="Submit" />
  </form>
  )

  const renderElement = isLoggedIn ? <Navigate to='/home' /> : formElement;

  return renderElement
}
