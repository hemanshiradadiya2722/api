// import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';

function App() {

  let [data,setdata] = useState("Hello");

  useEffect(() => {
    console.log("Hello");
  }, [data]);

  const btnhandler = () => {
    setdata("Hello welcome");
  }

  return (
   <div className="App">
      <h1>{data}</h1>
      <input type='button' onClick={btnhandler} value="click here"></input>
   </div>
  );
}

export default App;
