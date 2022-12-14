import { Home, Login, Signup, Dashboard, AddCabin } from "./pages";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { LoginModal, SideModal, SignupModal } from "./modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header search={true} />
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header search={false} />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header search={false} />
              <Signup />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header search={false} />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/dashboard/add"
          element={
            <>
              <Header search={false} />
              <AddCabin />
            </>
          }
        />
      </Routes>
      {/* <LoginModal />
      <SignupModal /> */}
      <SideModal />
      <ToastContainer />
    </div>
  );
}

export default App;
