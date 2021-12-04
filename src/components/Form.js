import React, { useState } from "react";

function Form({ onSubmitAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: name,
      image: image,
    };

    onSubmitAdd(newItem);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleName}
          value={name}
          type="text"
          name="name"
          placeholder="Add new hog..."
        />
        <input
          onChange={handleImage}
          value={image}
          type="text"
          name="img"
          placeholder="Add image url..."
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default Form;
