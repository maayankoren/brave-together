import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({component : Component , ...rest} ) => {
    return (
        <Route 
            {...rest} 
            render={
            (props)=>{
                if(localStorage.getItem('authentication-key')){
                    return <Component {...props}/>
                }
                else{
                    return <Redirect to="/unauthorized"/>
                }
            }
        }   
        />
    )
}

export default ProtectedRoute
