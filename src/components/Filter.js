import React from "react";

function Filter({ filter, onChangeFilter }) {
  function handleSetFilter(e) {
    onChangeFilter(e.target.value);
  }

  return (
    <div>
      <label>Filter by: </label>
      <select name="filter" value={filter} onChange={handleSetFilter}>
        <option value="All">All</option>
        <option value="Greased">Greased</option>
      </select>
    </div>
  );
}

export default Filter;
