import React from "react";

const Busy = ({ day_of_week, name }) => {
  // console.log(props);
  return (
    <div>
      {/* <p>Muscles: {name}</p>
      <p>Day: {day ? day : "Rest in off days well"}</p> */}

      <table className="ui blue table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Target Muscles</th>
            <th>Exercise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{day_of_week}</td>
            <td>{name}</td>
            <td>{"squat"}</td>
          </tr>
          {/* <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Busy;
