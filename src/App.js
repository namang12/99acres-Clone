import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import { SingleP } from "./components/SingleProperty/SingleP";
import Properties from "./pages/Properties";
import Planpage from "./pages/Planpage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import PolotnoEditor from "./pages/PolotnoEditor";
import ForgotPassword from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/postproperty"
          element={
            <ProtectedRoute>
              <Listing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/properties"
          element={
            <ProtectedRoute>
              <Properties />
            </ProtectedRoute>
          }
        />
        <Route
          path="/properties/:id"
          element={
            <ProtectedRoute>
              <SingleP />
            </ProtectedRoute>
          }
        />
        <Route path="/subscription" element={<Planpage />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/changepassword" element={<ChangePassword/>} />
        <Route path="/polotno-editor" element={<PolotnoEditor />} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<Contact/>} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
