import { Home, Login, Signup } from "./pages";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { LoginModal, SideModal, SignupModal } from "./modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <LoginModal />
      <SignupModal />
      <SideModal />
      <ToastContainer />
    </div>
  );
}

export default App;
