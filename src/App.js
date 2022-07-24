import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import { Home } from "./Components/Home";
import { About } from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}
