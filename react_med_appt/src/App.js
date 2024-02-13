import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar'; 
// import LandingPage from './Components/LandingPage/Landingpage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Notification from './Components/Notification/Notification';





function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
                <Routes>
                  {/* <Route path="/" element={<LandingPage/>}/> */}
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  {/* <Route path="/instant-consultation" element={<InstantConsultation />} /> */}
                  {/* <Route path="/notification" element={<Notification/>}/>
                 */}
                  
                </Routes>
          </Notification>

            
        </BrowserRouter>
       
    </div>
  );
}
export default App;