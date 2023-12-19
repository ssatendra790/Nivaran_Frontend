import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Pages/Login';
import MyForm from './Pages/Form';
import StateGovt from './Pages/StateGovt';
import CentralGovt from './Pages/CentralGovt';
import Grievance from './Pages/Grievance';
import Register from './Pages/Register';
import Status from './Pages/Status';
import StatusDetails from './Pages/StatusDetails';
import SpeechArena from './Pages/SpeechArena';

const App = () => {
  return (
    <div className="">
      <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/form" element={<MyForm/>}/>
            <Route path="/state_ministries" element={<StateGovt/>}/>
            <Route path="/central_ministries" element={<CentralGovt/>}/>
            <Route path="/grievance" element={<Grievance/>}/>
            <Route path="/status" element={<Status/>}/>
            <Route path="/statusdetails" element={<StatusDetails/>}/>
            <Route path="/speecharena" element={<SpeechArena/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
