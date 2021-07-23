import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Components/LandingPage/Landing'
import Login from './Components/Login/Login'

export default function route() {
    return (
        <Switch>
                <Route path='/login' exact="true" component={Login}/>
                <Route path='/' name="Home" component={Landing} />
        </Switch>
    )
}
