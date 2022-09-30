import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
