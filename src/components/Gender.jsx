import React from "react";

export default function Gender(props) {
  return (
    <div className="gender">
      <h1 className="hello-class">
        {props.gender == null ? (
          <h1>Chakka</h1>
        ) : (
          props.gender.charAt(0).toUpperCase() + props.gender.slice(1)
        )}
      </h1>
    </div>
  );
}
