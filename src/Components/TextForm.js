import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.ShowAlert("Converted to uppercase","success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.ShowAlert("Converted to lowecase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.ShowAlert("Text Cleared","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.ShowAlert("Text copied to clipboard","success");
  }
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.ShowAlert("Removed unwanted spaces","success");
  }
  return (
    <>
      <div className="container" style={{ backgroundColor : props.mode === 'dark' ? 'black' : 'white',
    color : props.mode === 'light' ? 'black' : 'white'}}>
        <div className="mb-3 my-3">
          <label htmlFor="MyBox" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            id="MyBox"
            rows="8"
            onChange={handleOnChange}
            style={{ backgroundColor : props.mode === 'dark' ? 'black' : 'white',
        color : props.mode === 'light' ? 'black' : 'white',
        border :   props.mode === 'light' ? '2px solid black' : '2px solid white'  }}
          ></textarea>
        </div>
        <button className="btn btn-primary pt-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleExtraSpaceClick}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{ backgroundColor : props.mode === 'dark' ? 'black' : 'white',
    color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1> Your Text summary !</h1>
        <p>
          {" "}
          : Total {text.split(" ").length} Words & {text.length} Characters
        </p>
        <p>
          {" "}
          : Approx Time to read the above text would be{" "}
          {0.008 * text.split(" ").length} minutes
        </p>
        <h3> Preview Text</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
