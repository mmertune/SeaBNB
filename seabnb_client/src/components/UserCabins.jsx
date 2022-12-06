import { useDispatch } from "react-redux";
import { deleteCabin } from "../redux/cabinSlice";
import '../assets/css/UserCabins.css'

const UserCabins = ({ cabin }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>{cabin.city}</div>
      <button onClick={() => dispatch(deleteCabin(cabin._id))}>Delete</button>
    </>
  );
};
export default UserCabins;
