import React from 'react'
import AuthService from '../../services/auth.service'
const ApproverLanding = () => {
const user = AuthService.getCurrentUser();
  
  return (
    <div>
    <div>Fetch Data using useEffect for the partlicular User</div>
    <div>Dashboard Start</div>
    </div>
  )
}

export default ApproverLanding