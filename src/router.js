import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import VideoPage from './pages/VideoPage'

const Routes = () => (
    <Switch>
        <Route path="/deep-neural-networks-for-language-understanding" component={VideoPage}/>
        <Route path="/explainable-aI-and-Causality" component={VideoPage}/>" component={VideoPage}/>
        <Route path="/style-transfer-networks" component={VideoPage}/>
        <Route path="/low-resource-learning-transfer-learning-active-learning" component={VideoPage}/>
        <Route path="/alphaGo-alphaZero-alphaStar" component={VideoPage}/>
        <Route path="/" component={DashboardPage}/>
    </Switch>
)

export default Routes