import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router";
import Diet from "./components/Diet.jsx";
import Exercise from "./components/Exercise";
import Home from "./components/Home";
import About from "./components/About";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog.jsx";
import Shop from "./components/Shop.jsx";
import Busy from "./components/Busy.jsx";

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
  const [test, setTest] = useState("BLOG section");

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
        <Link className="link" to="/shop">
          <span className="aboutSpan">SHOP</span>
        </Link>
        <Link className="link" to="home/blog">
          <span className="aboutSpan">BLOG</span>
        </Link>
        {/* <Link to="busy">1-2 days a week</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" /> */}
        <Route path="diet" element={<Diet />} />
        {/* </Route> */}
        <Route path="home" element={<Home />}>
          <Route path="blog" element={<Blog msg={test} />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="busy" element={<Busy />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/diet/:nutrient" element={<carb />} /> */}

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
