import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";

const CardChoice = function () {
  return (
    <>
      <div>
        <Link to="/keto">
          <div
            className="card text-white bg-primary mb-3"
            // style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Diet Track: Calculator</div>
            <div className="card-body">
              <h5 className="card-title">Click me: </h5>
              <p className="card-text">
                Ketogenic diet focusses on keeping your carbohydrate level below
                50 grams while meeting your calorie requirements in a preset
                ratio.
              </p>

              <p>
                Intermittent Fasting relies on fasting for at least 16 hours
                while maintaining a slight or equivalent calorie deficit. No
                preset ratio of nutrients required. Effective for beginners. Can
                be combined with the ketogenic diet.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/intermittent">
          <div
            className="card text-white bg-success mb-3"
            // style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              Exercise Track: Strength and Endurance
            </div>
            <div className="card-body">
              <h5 className="card-title">Click me: </h5>
              <p className="card-text">
                As much as how you eat matters, so does exercise to ensure
                overall maintenance of health and weight. Current evidence
                suggests results are approx 40 percent exercise, 60 percent
                diet. A combo of strength and endurance training is warranted.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <h2>Fitness with none the fluff !</h2>
      </div>

      <main>{<CardChoice />}</main>
      <Outlet />
    </div>
  );
};

export default Home;
