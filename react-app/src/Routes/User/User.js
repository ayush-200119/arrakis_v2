import React,{useState , useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import UserLanding from './UserLanding';
import UserMain from './UserMain'
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