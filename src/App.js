import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import axios from "axios"
function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {

          const getdata = await axios.get("http://localhost123/api")
          console.log('getdata:', getdata.data)
        }}
      >click me 1</button>
      <button
        onClick={async () => {
          const getdata = await axios.get("http://localhost63450/5465api/111")
          console.log('getdata:', getdata.data)
        }}
      >click carhay</button>
      <button
        onClick={async () => {

          const getdata = await axios.get("http://localhost/api/222")
          console.log('getdata:', getdata.data)
        }}
      >click 222333</button>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
