import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { Header } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
