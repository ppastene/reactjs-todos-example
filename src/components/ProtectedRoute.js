import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute({ children, ...rest }) {
    
    // Obtener valor de la cookie
    const { cookies } = useContext(AuthContext);

    console.log("PrtotectedRoute:",cookies)
    
    if(cookies.auth) return (
        <Route path={rest.path} component={rest.component} />
    );

    return(
        <Redirect to={{ pathname: "/login" }} />
    )
}