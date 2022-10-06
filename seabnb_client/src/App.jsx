import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { Header } from "./components";
import {LoginModal, SideModal, SignupModal} from "./modal";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LoginModal />
      <SignupModal />
      <SideModal />
    </div> 
  );
}

export default App;
