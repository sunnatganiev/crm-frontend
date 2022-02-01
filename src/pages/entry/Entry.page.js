import React, { useState } from "react";
import LoginForm from "../../components/login/Login.comp";
import ResetPassword from "../../components/password-reset/PasswordReset.comp";
import "./entry.style.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Please enter email and password");
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter email");
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {formLoad === "login" ? (
          <LoginForm
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            onSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        ) : (
          <ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
