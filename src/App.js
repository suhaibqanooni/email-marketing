import "./App.css";
import Home from "./Components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmail from "./Components/CreateEmail";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Error404 from "./Components/Error404";
import Profile from "./Components/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/error" element={<Error404 />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/createEmail" element={<CreateEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
