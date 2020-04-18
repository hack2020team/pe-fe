import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './TestComponent'


const Routes = () => (
    <Switch>
        <Route path="/haha" component={Test}/>
    </Switch>
)

export default Routes