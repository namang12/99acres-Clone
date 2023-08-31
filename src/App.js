import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postproperty" element={<Listing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
