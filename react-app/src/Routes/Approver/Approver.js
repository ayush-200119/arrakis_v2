import React from 'react';
import { Route, Routes } from "react-router-dom";
import ApproverLanding from './ApproverLanding';
import ApproverMain from './ApproverMain';
import Security from './Security';
const Approver = () => {
  return (
    <Routes>
    <Route path = "/" element = {<ApproverMain />}>
    <Route index element={<ApproverLanding/>}/>
    <Route path="/trade/:bookID" element={<Security/>}></Route>
    </Route>
    </Routes>
  )
}

export default Approver
