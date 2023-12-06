
import { useState } from 'react';
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import Textf from './componets/Textf';
import Alert from './componets/Alert';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout( () =>{
      setAlert(null);
    },1500);
  }
   const toggleMode = ()=>{
    if(mode === 'light')
    {  
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert("Dark mood has been enabled", "success");
    // document.title='Text utils - Dark Mood';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mood has been enabled", "success");
      // document.title='Text utils - Light Mood';
    }
  }
  return (
    <>
    <Router>
<Navbar title="Textutil"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
    <Routes>
      <Route exact path="/about" element={ <About mode={mode}/>} />
     <Route  exact path="/" element={<Textf showAlert={showAlert} heading="Try text utils- Word counter Carecter counter" mode={mode}/>}></Route>
    </Routes>
</div>
</Router>
</>
  );
}

export default App;
