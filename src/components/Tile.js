import React, { useState } from "react";
import Detail from "./Detail";

function Tile({ hog }) {
  const [detail, setDetail] = useState(false);

  function handleDetail() {
    setDetail((detail) => !detail);
  }

  return (
    <div className="card">
      <div className="image">
        <img src={hog.image} alt="piggy" />
      </div>
      <div className="description">
        <p>{hog.name}</p>
        <button className="ui button" onClick={handleDetail}>
          {detail ? "Hide Details" : "Show Details"}
        </button>

        {detail ? <Detail hog={hog} /> : ""}
      </div>
    </div>
  );
}

export default Tile;
