import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase function was clicked " + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("handleOnChange function was clicked")
        setText(event.target.value)
    }
    const [text,setText] = useState("");
    // text = "new text" - Wrong way to change the state
    // Correct way to change the state
    // setText("new text")
  return (
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter a text here"></textarea>
    <button className='btn btn-primary' onClick={handleUpClick}>Covert to Uppercase</button>
  </div>
  )
}
