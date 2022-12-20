import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
    msg:message,
    type:type })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  let toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled',"success");
      document.title = "TextUtils - Light Mode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(46 84 91)';
      showAlert('Dark Mode has been Enabled',"success");
      document.title = "TextUtils - Dark Mode";
    }
  }
  return (
  <>
<Router>
 <Navbar title ='TextUtils' mode = {mode} toggleMode = {toggleMode}/>
 <Alert alert ={alert}/>

 <div className = "container my-3">
{/* <TextForm heading ="Enter the text to analyze" mode = {mode} showAlert ={showAlert}/>*/}
 <Routes>        
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<TextForm heading ="Enter the text to analyze" mode = {mode} showAlert ={showAlert}/>} />     
          
</Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
