import React from 'react';
import { Route, Routes } from "react-router-dom";
import UserLanding from './UserLanding';
import UserMain from './UserMain';
const User = () => {
  return (
    <Routes>
    <Route path = "/" element = {<UserMain />}>
    <Route index element={<UserLanding/>}/>
    </Route>
    </Routes>
  )
}

export default User