import React, { useState } from "react";
import Nav from "./Nav";
import TileContainer from "./TileContainer";
import Filter from "./Filter";
import Sort from "./Sort";
import Form from "./Form";

import hogs from "../porkers_data";

function App() {
  console.log("This is hogs array of obj:", hogs);

  const [hog, setHog] = useState(hogs)
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");

  function addNewItem(newItem) {
	  setHog([...hog, newItem ])
  }

  const filteredHog = hog
    .filter((hog) => (filter === "All" ? hog : hog.greased === true))
    .sort((hog1, hog2) => {
      if (sort === "name") {
        return hog1.name.localeCompare(hog2.name);
      } else if (sort === "weight") {
        return hog1.weight - hog2.weight;
      }
      return hogs;
    });

  return (
    <div className="App">
      <Nav />
      <Filter filter={filter} onChangeFilter={setFilter} />
      <Sort sort={sort} onChangeSort={setSort} />
      <Form onSubmitAdd={addNewItem} />
      <TileContainer hogsData={filteredHog} />
    </div>
  );
}

export default App;
