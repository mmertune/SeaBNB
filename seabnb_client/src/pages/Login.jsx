import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "../components";
import { login, reset } from "../redux/authSlice";
import "../assets/css/Login.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
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

    const userdata = {
      email,
      password,
    };
    dispatch(login(userdata));
  };

  const saveInput = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="login_mainContainer gridBodyItem">
      <h1 className="login_title">Login</h1>
      <form action="submit" onSubmit={submitForm} className="login_formContainer">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={saveInput}
          value={email}
          required
          className="login_emailInput"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={saveInput}
          value={password}
          required
          className="login_passwordInput"
        />
        <button className="login_submitBttn">Submit</button>
      </form>
    </main>
  );
};

export default Login;
