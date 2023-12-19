import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Pages/Login';
import MyForm from './Pages/Form';
import Grievance from './Pages/Grievance';
import Register from './Pages/Register';
import Status from './Pages/Status';
import StateGovt from './Pages/StateGovt';
import CentralGovt from './Pages/CentralGovt';
import Reminder from './Pages/Reminder';
import OfficialTemplate from './Pages/OfficialTemplate';
import StatusTracker from './Pages/StatusTracker';
import Thankyou from './Pages/Thankyou';


const App = () => {

  localStorage.setItem("Language","English");
  return (
    <div className="">
      <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/form" element={<MyForm/>}/>
            <Route path="/state_ministry" element={<StateGovt/>}/>
            <Route path="/central_ministry" element={<CentralGovt/>}/>
            <Route path="/state_ministries" element={<StateGovt/>}/>
            <Route path="/central_ministries" element={<CentralGovt/>}/>
            <Route path="/grievance" element={<Grievance/>}/>
            <Route path="/status" element={<Status/>}/>
            <Route path="/statusdetails" element={<StatusTracker/>}/>
            <Route path="/speecharena" element={<SpeechArena/>}/>
            <Route path="/status" element={<Status/>}/>
            <Route path="/reminder" element={<Reminder/>}/>
            <Route path="/officialtemplate" element={<OfficialTemplate/>}/>
            <Route path="/thankyou" element={<Thankyou/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
