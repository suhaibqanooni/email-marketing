import "./App.css";
import Home from "./Components/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmail from "./Components/CreateEmail";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Error404 from "./Components/Error404";
import Profile from "./Components/Profile";
import PlaidTesting from "./Components/TestingPages/PlaidTesting";
const GOOGLE_CLIENT_ID =
  "711848419220-ql349gvmsnk6am52joj20jon4m6ll79m.apps.googleusercontent.com";
function App() {
  return (
    // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/register" element={<Signup />} />
    //       <Route exact path="/login" element={<Login />} />
    //       <Route exact path="/error" element={<Error404 />} />
    //       <Route exact path="/profile" element={<Profile />} />
    //       <Route exact path="/createEmail" element={<CreateEmail />} />
    //     </Routes>
    //   </Router>
    // </GoogleOAuthProvider>
    <PlaidTesting />
  );
}

export default App;
