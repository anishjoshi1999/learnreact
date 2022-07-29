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
  const handleTitleClick = () => {
    // console.log("Uppercase function was clicked " + text)
    const words = text.trim().split(" ")
    const newwords = []
    for (let word of words) {
      newwords.push(word[0].toUpperCase() + word.slice(1,))
    }

    setText(newwords.join(" "))
  }

  
  const wordCount = () => {
    let result = text.trim().split(" ").includes('')
    if (result !== true) {
      return text.split(" ").length
    } else {
      return 0
    }
  }
  const handleClearClick = () => {
    setText("")
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
        <button className='btn btn-primary m-2' onClick={handleUpClick}>Covert to Uppercase</button>
        <button className='btn btn-success m-2' onClick={handleLoClick}>Covert to Lowercase</button>
        <button className='btn btn-warning m-2' onClick={handleTitleClick}>Covert to Titlecase</button>
        <button className='btn btn-danger m-2' onClick={handleClearClick}>Clear Text</button>

      </div>
      <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>{wordCount()} words, {text.length} characters</p>
        <p>You need {text.split(" ").length * 0.008} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

  )
}
