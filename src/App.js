import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import About from './components/About';
function App() {
  // whether dark mode is enable or not
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglesMode = {
    toggleMode: () => {
      if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = 'grey'
        showAlert("Dark mode has been enabled", "dark")
        document.title = 'TextUtilis - Dark Mode'
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
        document.title = 'TextUtilis - Light Mode'
      }
    },
    togglePrimaryMode: () => {
      if (mode === 'light' || mode === 'success' || mode === 'warning') {
        setMode('primary')
        document.body.style.backgroundColor = '#add8e6'
        showAlert("Primary mode has been enabled", "primary")
        document.title = 'TextUtilis - Primary Mode'
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
        document.title = 'TextUtilis - Light Mode'
      }
    },
    toggleWarningMode: () => {
      if (mode === 'light' || mode === 'success' || mode === 'primary') {
        setMode('warning')
        document.body.style.backgroundColor = '#F0E68C'
        showAlert("Warning mode has been enabled", "warning")
        document.title = 'TextUtilis - Warning Mode'
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
        document.title = 'TextUtilis - Light Mode'
      }
    },
    toggleSuccessMode: () => {
      if (mode === 'light' || mode === 'warning' || mode === 'primary') {
        setMode('success')
        document.body.style.backgroundColor = '#50C878'
        showAlert("Success mode has been enabled", "success")
        document.title = 'TextUtilis - Success Mode'
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "light")
        document.title = 'TextUtilis - Light Mode'
      }
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglesMode={togglesMode} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
        <div className="container">
          <Routes>
            {/* /users --> Component 1 */}
            {/* /users/home ---> Component 2 */}
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </div>
      </Router>

    </>);
}
//  title="TextUtils" is a props
// Types of props
export default App;
