import { useState } from "react";

import Input from "../../common/Input";
import Button from "../../common/Button";

import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

type LoginPropsType = {
  setUserName: (name: string) => void;
};

const Login: React.FC<LoginPropsType> = ({ setUserName }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [loginError, setLoginError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      console.log(email, password);

      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.result);
        setUserName(data.user.name);
        navigate("/courses");
      } else {
        console.log("Login failed:", data);
        setLoginError("Login failed");
      }

      // Make a fetch call to the server - send the request.
      // If the response is not okay, display an error message.
      // If the response is okay, save the token to localStorage. - data.result
      // Redirect to the /courses page.
    }
  };

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {loginError && <p className={styles.error}>{loginError}</p>}
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
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;

// Response body
// Download
// {
//   "successful": true,
//   "result": "Bearer lAQNpwT5RuZuJSlcwubTbIbwM7Fs3vqm5YFekT1VaqX9Q8Eb9FqtZwJ+XSQlLxOUg80jz2c3jPSV7LzJL7FKdbvyEKGXSPABckgLA8DoqmDC0LkkhdhZ/WGlEB4czb+beguwzug2botp4WRafTbYrM67QBmk5xd0ahNkftpJBluAc3Nj80KeRWTzIXDaaOL4xyyPSh47qJiTa4MOSMUwR0/7cGb8yQlIvibwhL5ogdSVMrzz/660UE2RYwjvRKCwS9lqlMktAVhN1sYUtRy3WbiAnUTfQy35gBkMm+6M5mdLtI0mpUP+QV7jrdoQst8Bxo0/1R63T2V/gsIhErgJEA==",
//   "user": {
//     "email": "alma@alma.hu",
//     "name": "alma"
//   }
// }
