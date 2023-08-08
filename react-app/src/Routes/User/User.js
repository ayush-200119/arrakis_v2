import React from 'react';
import { Route, Routes } from "react-router-dom";
import SecurityCard from './SecurityCard';
import UserLanding from './UserLanding';
import UserMain from './UserMain';
const User = () => {
  return (
    <Routes>
    <Route path = "/" element = {<UserMain />}>
    <Route index element={<UserLanding/>}/>
    <Route path="/trade/:bookID" element={<SecurityCard/>}></Route>
    </Route>
    </Routes>
  )
}

export default User