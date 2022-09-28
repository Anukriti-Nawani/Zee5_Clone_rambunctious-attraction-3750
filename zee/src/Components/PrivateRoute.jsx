import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const PrivateRoute = ({children}) => {
    const  {isLogin} = useContext(AppContext);

if(!isLogin) { 
    return <Navigate to="/signup" />;
}
return children;
}

export default PrivateRoute;
