import React from "react";
import Tile from "./Tile";

function TileContainer({ hogsData }) {
  return (
    <div className="ui four stackable cards">
      {hogsData.map((hog) => (
        <Tile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default TileContainer;
