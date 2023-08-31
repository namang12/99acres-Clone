import "./App.css";
import Index from "./components/ListingPage/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postproperty" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
