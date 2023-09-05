import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import { SingleP } from "./components/SingleProperty/SingleP";
import Properties from "./pages/Properties";
import Planpage from "./pages/Planpage";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postproperty" element={<Listing />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/postproperty" element={<Listing/>} />
        <Route path="/singlep" element={<SingleP/>} />
        <Route path="/subscription" element={<Planpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
