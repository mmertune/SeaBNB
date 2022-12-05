import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "../components";
import { register, reset } from "../redux/authSlice";
import "../assets/css/Signup.css"

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = credentials;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const submitForm = (event) => {
    event.preventDefault();
    if (password !== password2) {
      toast.error("passwords don't match");
    } else {
      const userdata = {
        name,
        email,
        password,
      };
      dispatch(register(userdata));
    }
  };
  const saveInput = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(credentials);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="signup_mainContainer gridBodyItem">
      <h1 className="signup_title">Sign Up</h1>
      <form
        action="submit"
        onSubmit={submitForm}
        className="signup_formContainer"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={saveInput}
          value={name}
          required
          className="signup_nameInput"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={saveInput}
          value={email}
          required
          className="signup_emailInput"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={saveInput}
          value={password}
          required
          className="signup_password1Input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          onChange={saveInput}
          value={password2}
          required
          className="signup_password2Input"
        />
        <button className="signup_submitBttn">Submit</button>
      </form>
    </main>
  );
};
export default Signup;
