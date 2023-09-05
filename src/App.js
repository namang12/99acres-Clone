import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Planpage from "./pages/Planpage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postproperty" element={<Listing/>} />
        <Route path="/subscription" element={<Planpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
