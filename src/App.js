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
          path="/singlep"
          element={
            <ProtectedRoute>
              <SingleP />
            </ProtectedRoute>
          }
        />
        <Route path="/subscription" element={<Planpage />} />
        <Route path="/polotno-editor" element={<PolotnoEditor />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
