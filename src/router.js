import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './features/dashboard/Dashboard'
import VideoPage from './pages/videoPage'

const Routes = () => (
    <Switch>
        <Route path="/deep-neural-networks-for-language-understanding" component={VideoPage}/>
        <Route path="/explainable-aI-and-Causality" component={VideoPage}/>" component={VideoPage}/>
        <Route path="/style-transfer-networks" component={VideoPage}/>
        <Route path="/low-resource-learning-transfer-learning-active-learning" component={VideoPage}/>
        <Route path="/alphaGo-alphaZero-alphaStar" component={VideoPage}/>
        <Route path="/" component={Dashboard}/>
    </Switch>
)

export default Routes