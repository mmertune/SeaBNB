import { useState } from "react";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = credentials;
  const submitForm = (event) => {
    event.preventDefault();
  };
  const saveInput = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(credentials);
  return (
    <main>
      <h1>Sign Up</h1>
      <form action="submit" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={saveInput}
          value={name}
          required
        />
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
        <input
          type="password"
          placeholder="password"
          name="password2"
          onChange={saveInput}
          value={password2}
          required
        />
        <button>Submit</button>
      </form>
    </main>
  );
};
export default Signup;
