import React,{useState , useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import ApproverLanding from './ApproverLanding';
import ApproverMain from './ApproverMain'
const Approver = () => {
  return (
    <Routes>
    <Route path = "/" element = {<ApproverMain />}>
    <Route index element={<ApproverLanding/>}/>
    </Route>
    </Routes>
  )
}

export default Approver
