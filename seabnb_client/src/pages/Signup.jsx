import { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "../components";
import { register, reset } from "../redux/authSlice";

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
  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())
},[user,isError,isSuccess,message,navigate,dispatch])

  const submitForm = (event) => {
    event.preventDefault();
    if (password !== password2){
      toast.error("passwords don't match")
    } else{
      const userdata = {
        name,
        email,
        password
      }
      dispatch(register(userdata))
    }
  };
  const saveInput = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(credentials);

  if(isLoading){
    return <Spinner />;
  }
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
