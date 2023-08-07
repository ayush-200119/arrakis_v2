import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/Styles.css'
// import IdleTimerContainer from "./components/IdleTimerContainer";
// import Employee from './Routes/Employee/Employee';
import ProtectedRoute from './utlis/ProtectedRoutes'
import AuthService from "./services/auth.service";
import Spinner from './components/Spinner';
// import './fonts/stylesheet.css'
// import i18n from "i18next";
import User from './Routes/User/User';
import Approver from './Routes/Approver/Approver';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
// import { useTranslation } from "react-i18next";
// import { initReactI18next } from "react-i18next";
// import Temp from './Routes/Farmer/Temp';
// import Ticket from './Routes/Farmer/TicketTemp';
// import TestTemp from './Routes/Farmer/TestTemp';
import { useState } from 'react';
// import PaymentPage from './Routes/Farmer/PaymentPage';
const Main = lazy(() => import('./Routes/Main'))
// const Profile = lazy(() => import('./Routes/Profile'))
// const NotFound = lazy(() => import('./Routes/NotFound'))
// const Terms = lazy(() => import('./Routes/Terms'))
const Home = lazy(() => import('./Routes/Home'))
// const Customer = lazy(() => import('./Routes/Customer/Customer'))
const Register = lazy(() => import('./Routes/Register'))
const Login = lazy(() => import('./Routes/Login'))
// const User = lazy(() => import('./Routes/User/User'))
// const Approver = lazy(() => import('./Routes/Approver/Approver'))
const user1 = "approver";
// const Forgot = lazy(() => import("./Routes/Forgot"))
// const NewPassword = lazy(() => import("./Routes/NewPassword"))
// const ResetPasswordSuccessful = lazy(() => import("./Routes/ResetPasswordSuccessful"))
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
              path="user/*"
              element={
                <ProtectedRoute isAllowed={!!user1 && user1.role === "user"}>
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