import React from "react";

function Sort({ sort, onChangeSort }) {

    function handleSort(e) {
        onChangeSort(e.target.value)
    }

  return (
    <div>
      <label>Sort by: </label>
      <select value={sort} onChange={handleSort}>
        <option value=""></option>
        <option value="name">name</option>
        <option value="weight">weight</option>
      </select>
    </div>
  );
}

export default Sort;
