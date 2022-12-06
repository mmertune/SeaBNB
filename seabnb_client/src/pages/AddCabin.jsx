import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCabin, reset } from "../redux/cabinSlice";
import { toast } from "react-toastify";
import { DropzoneArea } from "material-ui-dropzone";
import "../assets/css/AddCabin.css";

const AddCabin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cabinInfo, setCabinInfo] = useState({
    pictures: "",
    city: "",
    stateAbbrv: "",
    rating: "",
    address: "",
    pricePerNight: "",
    // owner: "",
  });
  const { cabins, message, isError, isSuccess } = useSelector(
    (state) => state.cabin
  );
  const { user } = useSelector((state) => state.auth);
  console.log("mounted");
  console.log(cabins);
  console.log(message);
  const { pictures, city, stateAbbrv, rating, address, pricePerNight } =
    cabinInfo;
  //   useEffect(() => {
  //     dispatch(reset());
  //   }, []);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, message, navigate, user]);
  const updateCabinInfo = (event) => {
    setCabinInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitForm = (event) => {
    event.preventDefault();
    dispatch(createCabin(cabinInfo));
    setCabinInfo({
      pictures: "",
      city: "",
      stateAbbrv: "",
      rating: "",
      address: "",
      pricePerNight: "",
      // owner: "",
    });
  };
  console.log();
  if (!user) {
    return <></>;
  }
  return (
    <form
      action="submit"
      onSubmit={submitForm}
      className="addCabin_formContainer gridBodyItem"
    >
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={(files) => console.log("Files:", files)}
      />
      {/* <input
>>>>>>> eaad39c6983c115128d6b926435a17efa3a5bec9
        type="file"
        name="pictures"
        placeholder="pictures"
        value={pictures}
        onChange={updateCabinInfo}
        className="addCabin_pictureInput"
      /> */}
      <input
        type="text"
        name="city"
        placeholder="city"
        value={city}
        onChange={updateCabinInfo}
        required
        className="addCabin_cityInput"
      />
      <input
        type="text"
        name="stateAbbrv"
        placeholder="stateAbbrv"
        value={stateAbbrv}
        onChange={updateCabinInfo}
        required
        className="addCabin_stateInput"
      />
      <input
        type="number"
        name="rating"
        placeholder="rating"
        value={rating}
        onChange={updateCabinInfo}
        required
        className="addCabin_ratingInput"
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        value={address}
        onChange={updateCabinInfo}
        required
        className="addCabin_addressInput"
      />
      <input
        type="number"
        name="pricePerNight"
        placeholder="price"
        value={pricePerNight}
        onChange={updateCabinInfo}
        required
        className="addCabin_priceInput"
      />
      {/* <input
        type="text"
        name="owner"
        placeholder="owner"
        value={owner}
        onChange={updateCabinInfo}
        required
      /> */}
      <button className="addCabin_submitBttn">Submit</button>
    </form>
  );
};
export default AddCabin;
