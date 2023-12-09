import React, { useState } from "react";
import "./RightComponent.css";

export const RightComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    const ans = regex.test(email);
    if (ans) {
      setError(false);
      var a = document.createElement('a'); 
      a.href = "https://app.loch.one/welcome";
      a.target='_blank'; 
      a.click()
    } else {
      setError(true);
      
    }
  };

  return (
    <div className="right_container">
      <div className="loch_form">
        <p className="form_heading">Sign up for exclusive access.</p>
        <input
          placeholder="Your email address"
          className="form_input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error && <p className="error_message">Please enter a valid email</p>}

        <button className="form_cta" onClick={validateEmail}>
          Get started
        </button>
        <p className="form_decription">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};
