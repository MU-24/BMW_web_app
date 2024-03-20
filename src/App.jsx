
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Footter from "./components/Footter";

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/design" element={<Design/>}/>
      </Routes>
      <Footter />
    </BrowserRouter>
  );
}

export default App;
