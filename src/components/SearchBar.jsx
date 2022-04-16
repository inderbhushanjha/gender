import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(props) {
  const [val, setVal] = useState("");

  const inputHandler = (event) => {
    setVal(event.target.value);
    console.log(val);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.getGender(val);

    setVal("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="search-box">
        <button className="btn-search" type="submit">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Find Gender by Name..."
          onChange={inputHandler}
          value={val}
          required
        />
      </div>
    </form>
  );
}
