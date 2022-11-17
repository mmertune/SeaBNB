import { Home, Login, Signup } from "./pages";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { LoginModal, SideModal, SignupModal } from "./modal";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <LoginModal />
      <SignupModal />
      <SideModal />
    </div>
  );
}

export default App;
