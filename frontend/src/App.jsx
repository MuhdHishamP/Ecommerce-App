import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./pages/Posts/Posts";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Item from "./pages/Item/Item";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Item />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
