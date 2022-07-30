import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase function was clicked " + text)
    props.showAlert(" Converted to Uppercase", "success")
    let newText = text.toUpperCase()
    setText(newText)
  
  }
  const handleLoClick = () => {
    // console.log("Uppercase function was clicked " + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert(" Converted to Lowercase", "success")
  }
  const handleTitleClick = () => {
    // console.log("Uppercase function was clicked " + text)
    props.showAlert(" Converted to Title Case","success")
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
  const handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert(" Copied","success")
  }
  const handleClearClick = () => {
    setText("")
    props.showAlert(" Cleared","success")
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
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="container" >
          <h2>{props.heading}</h2>
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" ,color: props.mode === "dark" ? "white" : "black"}} placeholder="Enter a text here"></textarea>
          <button className='btn btn-primary m-2' onClick={handleUpClick}>Covert to Uppercase</button>
          <button className='btn btn-success m-2' onClick={handleLoClick}>Covert to Lowercase</button>
          <button className='btn btn-warning m-2' onClick={handleTitleClick}>Covert to Titlecase</button>
          <button className='btn btn-danger m-2' onClick={handleClearClick}>Clear Text</button>
          <button className='btn btn-info m-2' onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-4">
          <h1>Your text Summary</h1>
          <p>{wordCount()} words, {text.length} characters</p>
          <p>You need {text.split(" ").length * 0.008} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
      </div>

    </>

  )
}
