import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

// import About from './components/About';
function App() {
  // whether dark mode is enable or not
  const [mode,setMode] = useState("light")
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"  mode={mode}></TextForm>
         {/* <About/> */}
      </div>
    </>);
}
//  title="TextUtils" is a props
// Types of props
export default App;
