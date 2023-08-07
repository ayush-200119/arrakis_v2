import React,{useState , useEffect} from 'react'
import { Routes, Route } from "react-router-dom";

import { Outlet } from 'react-router-dom'

const ApproverMain = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default ApproverMain