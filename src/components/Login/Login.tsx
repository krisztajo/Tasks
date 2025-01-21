import { useState } from "react";

import Input from "../../common/Input";
import Button from "../../common/Button";

import styles from "./Login.module.css";
import { ViewType } from "../../App";

type LoginPropsType = {
  setView: (view: ViewType) => void;
};

const Login: React.FC<LoginPropsType> = ({ setView }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    let valid = true;

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
      console.log(name, email, password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <Button fullWidth>Login</Button>
        <p className={styles.registrationRedirect}>
          If you don't have an account you may{" "}
          <button
            onClick={() => setView("registration")}
            className={styles.registration}
          >
            Register
          </button>
        </p>
      </form>
    </>
  );
};

export default Login;
