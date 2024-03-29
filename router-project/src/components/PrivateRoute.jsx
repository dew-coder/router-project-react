import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isLogged , children}) => {
  if(isLogged){
    return children
  }
  else{
    return <Navigate to="/Login"/>
  }
}

export default PrivateRoute
