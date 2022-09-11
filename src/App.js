import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/Login";
import Welcome from "./components/welcome";
import ForgotPassword from "./components/forgetPassword";
import Toastnew from "./components/toast";
import ResetPassword from "./components/reset";
import Success from "./components/success";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/welcome" element={<Welcome />} exact />
      <Route path="/toast" element={<Toastnew />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="/success" element={<Success />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/ResetPassword" element={<ResetPassword />} exact />
      <Route path="/forgetPassword" element={<ForgotPassword />} exact />
      <Route path="/forgetPassword/:token" element={<ForgotPassword />} exact />
    </Routes>
  );
}

export default App;
