import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router";
import Keto from "./components/Keto";
import Intermittent from "./components/Intermittent";
import Home from "./components/Home";
import About from "./components/About";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  });

  return (
    <div>
      <h2>Not Found - 404</h2>
      <button onClick={() => navigate("/home")}>Go Home</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h1>FITNESS over 40</h1>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="home" element={<Home />} />
        <Route path="intermittent" element={<Intermittent />} />
        <Route path="keto" element={<Keto />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/price/:nutrient" element={<carb />} /> */}

        {/* <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
