import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { Header } from "./components";
import LoginModal from "./modal/LoginModal";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LoginModal />
    </div> 
  );
}

export default App;
