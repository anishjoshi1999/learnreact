import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase function was clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = () => {
    // console.log("Uppercase function was clicked " + text)
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("handleOnChange function was clicked")
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  // text = "new text" - Wrong way to change the state
  // Correct way to change the state
  // setText("new text")
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter a text here"></textarea>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Covert to Uppercase</button>
        <button className='btn btn-danger mx-1' onClick={handleLoClick}>Covert to Lowercase</button>

      </div>
      <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

  )
}
