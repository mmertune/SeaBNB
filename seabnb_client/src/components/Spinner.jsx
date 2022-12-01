import spinner from "../assets/gifs/Loading_Spinner.gif";
import "../assets/css/Spinner.css"
const Spinner = () => {
  return (
    <div className="spinner_container">
      <img src={spinner} alt="...loading" />
    </div>
  );
};
export default Spinner;
