import { useState } from "react";

import Input from "../../common/Input";

import styles from "./Registration.module.css";

import Button from "../../common/Button";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [saveErrors, setSaveError] = useState<string[]>();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    let valid = true;

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    } else {
      setEmailError("");
    }

    const passwordRegex = /^.{6,}$/;
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      const newUser = {
        name,
        password,
        email,
      };

      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.successful) {
        navigate("/login");
      } else {
        setSaveError(result.errors);
      }
    }
  };

  return (
    <>
      <h1 className={styles.title}>Registration</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {saveErrors &&
          saveErrors.map((error) => <p className={styles.error}>{error}</p>)}
        <Input
          labelText="Name"
          placeholderText="Enter your name"
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setName(target.value)
          }
          value={name}
          error={!!nameError}
        />
        {nameError && <p className={styles.error}>{nameError}</p>}
        <Input
          labelText="Email"
          placeholderText="Enter your email"
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(target.value)
          }
          value={email}
          error={!!emailError}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}
        <Input
          labelText="Password"
          placeholderText="Enter your password"
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(target.value)
          }
          value={password}
          type="password"
          error={!!passwordError}
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}
        <Button fullWidth>Register</Button>
        <p className={styles.loginRedirect}>
          If you have an account you may
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Registration;
