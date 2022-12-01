import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CabinForm, Spinner, UserCabins} from "../components";
import { getUserCabin, reset } from "../redux/cabinSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cabins, isLoading, isError, message } = useSelector(
    (state) => state.cabin
  );
  console.log(cabins.length);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getUserCabin());
    }
    // dispatch(getUserCabin());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else
    return (
      <>
        {user && <h1>{user.name}</h1>}
        <CabinForm />
        <section>
          {cabins.length > 0 ? (
            cabins.map((cabin) => {
              return(<UserCabins key={cabin._id} cabin={cabin}/>)
            })
          ) : (
            <h3>No goals</h3>
          )}
        </section>
      </>
    );
};
export default Dashboard;
