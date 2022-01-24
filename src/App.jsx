import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router";
import Keto from "./components/Keto";
import Exercise from "./components/Exercise";
import Home from "./components/Home";
import About from "./components/About";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/Test.jsx";

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
  const [test, setTest] = useState("hello world");

  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <h1>FITNESS over 40</h1>
        <Link className="link" to="/home">
          <span className="aboutSpan">HOME</span>
        </Link>{" "}
        <Link className="link" to="/about">
          <span className="aboutSpan">ABOUT</span>
        </Link>
        <Link className="link" to="home/test">
          <span className="aboutSpan">TEST</span>
        </Link>
      </nav>

      <Routes>
        {/* <Route path="/" /> */}
        <Route path="keto" element={<Keto />} />
        {/* </Route> */}
        <Route path="home" element={<Home />}>
          <Route path="test" element={<Test msg={test} />} />
          {/* Link path must match */}
        </Route>
        <Route path="about" element={<About />} />
        <Route path="intermittent" element={<Exercise />} />
        {/* <Route path="*" element={<NotFound />} /> */}

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
