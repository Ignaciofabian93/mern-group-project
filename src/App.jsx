import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { Authcontext } from "./context/authContext";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  // if (!user) {
  //   return <Navigate to={redirectPath} replace />;
  // }
};

const App = () => {
  const { user } = useContext(Authcontext);
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ProtectedRoute user={user} />}> */}
        <Route path="/home" element={<Home />} />
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
