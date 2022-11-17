import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const submitForm = (event) => {
    event.preventDefault();
  };
  const saveInput = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name] : event.target.value,
    }));
  };
console.log(credentials)
  return (
    <main>
      <h1>Login</h1>
      <form action="submit" onSubmit={submitForm}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={saveInput}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={saveInput}
          value={password}
          required
        />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Login;
