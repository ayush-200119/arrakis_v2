import React from 'react';
import { Route, Routes } from "react-router-dom";
import AddTrade from './AddTrade';
import SecurityCard from './SecurityCard';
import UserLanding from './UserLanding';
import UserMain from './UserMain';

const User = () => {
  return (
    <Routes>
    <Route path = "/" element = {<UserMain />}>
    <Route index element={<UserLanding/>}/>
    <Route path="/trade/:bookID" element={<SecurityCard/>}></Route>
    <Route path="/addtrade" element={<AddTrade/>}> </Route>
    </Route>
    
    </Routes>
  )
}

export default User