import React, { useState } from "react";
import "../Landing/Landing.css";

function SelectionWidget(props) {
  const [colorValue, SetColorValue] = useState("");
  const [makeValue, SetMakeValue] = useState("");
  const [name, setName] = useState("");
  const [showBlock, setShowBlock] = useState(false);

  const onColorButtonClick = (value) => {
    SetColorValue(value);
  };

  const onMakeButtonClick = (value) => {
    SetMakeValue(value);
  };

  const onsubmit = () => {
    setShowBlock(true);
  };

  return (
    <>
      <div>
        <span className="NameClass">Color :</span>
        {props.color.map((item) => {
          return (
            <button
              className="button-grey"
              value={item}
              onClick={() => onColorButtonClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <span className="NameClass">Make :</span>
        {props.Make.map((item) => {
          return (
            <button
              className="button-grey"
              value={item}
              onClick={() => onMakeButtonClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <span className="NameClass">Name :</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="button" onClick={() => onsubmit()}>
        Submit
      </button>
      {showBlock && (
        <div>
          <div>
            <span>Color : </span>
            <span>{colorValue}</span>
            <div>
              <span>Make : </span>
              <span>{makeValue}</span>
            </div>
            <div>
              <span>Name : </span>
              <span>{name}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectionWidget;
