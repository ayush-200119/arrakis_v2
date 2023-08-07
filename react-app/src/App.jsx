import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/Styles.css'

import ProtectedRoute from './utlis/ProtectedRoutes'
import AuthService from "./services/auth.service";
import Spinner from './components/Spinner';

import User from './Routes/User/User';
import Approver from './Routes/Approver/Approver';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { useState } from 'react';

const Main = lazy(() => import('./Routes/Main'))

const Home = lazy(() => import('./Routes/Home'))

const Register = lazy(() => import('./Routes/Register'))
const Login = lazy(() => import('./Routes/Login'))

const user1 = AuthService.getCurrentUser();
//const user1 = "user1"

const RegisterSucces = lazy(() => import("./Routes/RegisterSuccess"))


const App = () => {

//   const [bookingDetails, setbookingDetails] = useState({
//     farmer: "",
//     phone: "",
//     paymentDetails: "",
//     BookedStalls: null,
//     stallsBooked: null,
//     totalAmount: null,
//   });
//   const today = new Date();
//   const [selected, setSelected] = useState([]);
  var [date, setdate] = useState(null);
//  const [bookedStalls, setBookedStalls] = useState([]);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Main 
          
          />}>
            <Route index element={<Home 
           
            />} />
           
            <Route
              path="/user/*"
              element={
                <ProtectedRoute isAllowed={!!user1 && (user1 === "user1" || user1 === "user2" ||user1 === "user3" || user1 === "user4")}>
                  <User
                  
                   />
                </ProtectedRoute>
              }>
            </Route>


          <Route 
            path="/approver/*" 
            element={
            <ProtectedRoute isAllowed={!!user1 && user1.role === "approver"}>
              <Approver
                
              />
              </ProtectedRoute>
            }>
          </Route>

        


            <Route path='/login' element={<Login date={date}/>} />
            <Route path='/register' element={<Register   />} />
            <Route path='/registeration-successfull' element={<RegisterSucces   />} />
            {/* <Route path='/Forgot' element={<Forgot  t={t} />} /> */}
            {/* <Route path='/newpassword' element={<NewPassword  t={t} />} /> */}
            {/* <Route path='/ResetPasswordSuccessful' element={<ResetPasswordSuccessful  t={t} />} /> */}
            {/* <Route path='/terms' element={<Terms  t={t} />} /> */}
          </Route>
          {/* <Route path="*" element={<NotFound  t={t} />} /> */}
        </Routes>
      </Suspense>
      {/* <IdleTimerContainer></IdleTimerContainer> */}

      </LocalizationProvider>
  );
};

export default App;