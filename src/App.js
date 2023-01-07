import React from 'react';
import './App.css';
import Papa from "papaparse";
import axios from 'axios';
import Accordion from './components/accordian';
// const getposts = async () => {
//   try {
//     const response = await axios.get('data.csv');
//     const data = Papa.parse(response.data);
//   } catch (error) {
//     throw error;
//   }
// }

// getposts()
function App() {

  return (
    <>
      <div className="App">
        <div className="Main_header">
          Short Text Analysis
        </div>
        <div className="Sub_header">
          Lifelong LLM99 Foot,Calf and Leg Massager,(With Heat and Vibration),80W,$ Motors,Dark Brown
        </div>
        <div className="App_container">
        <Accordion/>
        </div>
      </div>
    </>
  );
}

export default App;
