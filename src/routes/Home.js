import { Navigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Contact from "../components/Contact";

export default function Auth() {
  const [isLoggedIn, setLogout] = useLocalStorage("loginstate", true);
  console.log(isLoggedIn);

  const handleSubmit = () => {
    if (isLoggedIn) {
      setLogout(false);
      console.log(isLoggedIn);
    }
  };

  const renderElement = !isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="App">
      <button type="submit" className="logout-btn" onClick={handleSubmit}>
        Logout
      </button>
      <div className="App-header">
      <ContactList />
      {/* <Contact /> */}
      </div>
    </div>
  );

  return renderElement;
}
