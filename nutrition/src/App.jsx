// import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
// import { useNavigate } from "react-router";
import Keto from "./components/Keto";
import Intermittent from "./components/Intermittent";
import { useState } from "react";

// function NotFound() {
//   return;
//   ("not found");
// }

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });
  return (
    <div>
      <h2>Not Found - 404</h2>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

function App() {
  // const [price, setPrice] = useState(null);

  // const handleClick = (price) => {
  //   setPrice(price);
  // };

  return (
    <div>
      <nav>
        <h1>FITNESS over 40</h1>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
      </nav>
      <main>
        <Link to="/keto">
          <div>Keto</div>{" "}
        </Link>
        <Link to="/intermittent">
          <div>intermittent</div>
        </Link>
      </main>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="intermittent" element={<Intermittent />} />
        <Route path="keto" element={<Keto />} />
        {/* <Route path="/price/:country" element={<Price />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
