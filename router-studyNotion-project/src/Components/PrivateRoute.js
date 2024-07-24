import React from 'react'
import { Navigate } from 'react-router-dom';

// *! children are automatically passed as props
const PrivateRoute = ({isLoggedIn , children}) => {
//   const nav=useNavigate(); did not work
    if(isLoggedIn){
        return children;
    }
    else{
        // nav("/login"); did not work
        return <Navigate to="/login"/>
    }
  
}

export default PrivateRoute