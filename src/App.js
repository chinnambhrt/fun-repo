import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name,setName] = useState('');


  const onNameChange=(e)=>{
    setName(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" placeholder='Type your name' onChange={onNameChange} style={{marginTop:'20%',padding:'10px',fontSize:'18px'}}/>
      <button onClick={()=>{alert(name)}}
      style={{display:'block',marginTop:'2%', borderRadius:'3px',
      margin:'2% auto',padding:'10px 23px', backgroundColor:'lightgrey', border:'none',outlineColor:'black'}}
      >OK</button>
    </div>
  );
}

export default App;
