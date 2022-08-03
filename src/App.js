import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

// import About from './components/About';
function App() {
  // whether dark mode is enable or not
  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglesMode = {
    toggleMode: () => {
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = 'grey'
        showAlert("Dark mode has been enabled", "dark")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
      }
    },
    togglePrimaryMode:() => {
      if(mode === 'light' || mode === 'success' || mode === 'warning'){
        setMode('primary')
        document.body.style.backgroundColor = '#add8e6'
        showAlert("Primary mode has been enabled", "primary")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
      }
    },
    toggleWarningMode:() => {
      if(mode === 'light' || mode === 'success' || mode === 'primary'){
        setMode('warning')
        document.body.style.backgroundColor = '#F0E68C'
        showAlert("Warning mode has been enabled", "warning")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
      }
    },
    toggleSuccessMode:() => {
      if(mode === 'light' || mode === 'warning' || mode === 'primary'){
        setMode('success')
        document.body.style.backgroundColor = '#50C878'
        showAlert("Success mode has been enabled", "success")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
      }
    }
  }
 
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglesMode={togglesMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert}></TextForm>
         {/* <About/> */}
      </div>
    </>);
}
//  title="TextUtils" is a props
// Types of props
export default App;
