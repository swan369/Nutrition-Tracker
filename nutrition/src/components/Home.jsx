import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const CardChoice = function () {
  return (
    <>
      <div>
        <Link to="/keto">
          <div
            className="card text-white bg-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Ketogenic Diet track</div>
            <div className="card-body">
              <h5 className="card-title">Click me: </h5>
              <p className="card-text">
                The aim of the Ketogenic diet focusses highly on keeping your
                carbohydrate level below 50gram while also meeting your calorie
                requirements in a preset ratio.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/intermittent">
          <div
            className="card text-white bg-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Intermittent Fasting Track</div>
            <div className="card-body">
              <h5 className="card-title">Click me: </h5>
              <p className="card-text">
                Intermittent Fasting focusses on fasting for at least 16 hours
                while maintain a slight calorie deficit. Effective for
                beginners. Can be combined with the ketogenic diet.
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
    <div>
      <h2>Make your selection:-</h2>
      <main>{<CardChoice />}</main>
    </div>
  );
};

export default Home;
