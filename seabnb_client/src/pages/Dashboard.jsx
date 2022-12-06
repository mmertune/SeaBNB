import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CabinForm, Spinner, UserCabins } from "../components";
import { getUserCabin, reset } from "../redux/cabinSlice";
import "../assets/css/Dashboard.css";
import {Card} from '../components'
// import { canBeRendered } from "react-toastify/dist/utils";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cabins, isLoading, isError, message } = useSelector(
    (state) => state.cabin
  );
  console.log(cabins);
  console.log(message);
  useEffect(() => {
    if (isError) {
      dispatch(reset());
    } else {
      dispatch(reset());
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getUserCabin());
    }
    return () => {
      dispatch(reset());
      console.log("unmounted");
    };
  }, [user, navigate, isError, dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else
    return (
      <main className="dashboard gridBodyItem">
        {/* {user && <h1>{user.name}</h1>}
        <CabinForm /> */}
        <section className="dashboard_gridContainer">
          {cabins.length > 0 ? (
            cabins.map((cardInfo) => {
              // return <UserCabins key={cabin._id} cabin={cabin} />;
              return (
                <Card
                  key={cardInfo._id}
                  city={cardInfo.city}
                  stateAbbrv={cardInfo.stateAbbrv}
                  rating={cardInfo.rating}
                  address={cardInfo.address}
                  pricePerNight={cardInfo.pricePerNight}
                />
              );
            })
          ) : (
            <h3>No goals</h3>
          )}
        </section>
      </main>
    );
};
export default Dashboard;
