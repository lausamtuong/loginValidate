import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from "react"
import Header from './header';

function App() {
  return (
    <React.Fragment>
      <div className="w-4/12 bg-white rounded-xl  my-0 mx-auto p-[2rem] ">       
        <Header/>
      </div>
    </React.Fragment>  
  )
   
    
}

export default App;
