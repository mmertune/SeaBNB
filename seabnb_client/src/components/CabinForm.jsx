import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCabin } from "../redux/cabinSlice";
// import house2 from "../assets/images/house2.jpeg"

const CabinForm = () => {
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
  const { pictures, city, stateAbbrv, rating, address, pricePerNight } =
    cabinInfo;

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
  return (
    <form action="submit" onSubmit={submitForm}>
      <input
        type="file"
        name="pictures"
        placeholder="pictures"
        value={pictures}
        onChange={updateCabinInfo}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        value={city}
        onChange={updateCabinInfo}
        required
      />
      <input
        type="text"
        name="stateAbbrv"
        placeholder="stateAbbrv"
        value={stateAbbrv}
        onChange={updateCabinInfo}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="rating"
        value={rating}
        onChange={updateCabinInfo}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        value={address}
        onChange={updateCabinInfo}
        required
      />
      <input
        type="number"
        name="pricePerNight"
        placeholder="price"
        value={pricePerNight}
        onChange={updateCabinInfo}
        required
      />
      {/* <input
        type="text"
        name="owner"
        placeholder="owner"
        value={owner}
        onChange={updateCabinInfo}
        required
      /> */}
      <button>Submit</button>
    </form>
  );
};
export default CabinForm;
