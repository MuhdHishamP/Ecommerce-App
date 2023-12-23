import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import "./App.css";
import Cart from "./components/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
