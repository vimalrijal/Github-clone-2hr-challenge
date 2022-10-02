import './App.css';
import React,{createContext, useState} from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';

export const Store = createContext()


function App() {
  const [logindata, setlogindata] = useState() 
  return (
    <div>
   
    <Store.Provider value={{logindata, setlogindata}}>
      <BrowserRouter>
        <Routes>
          <Route default path='/' element={<Login/>}/>
          <Route path='/userHome' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </Store.Provider>
     
    </div>

  );
}

export default App;

