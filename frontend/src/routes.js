import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Admin from './Admin'
import Home from './pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Admin>
                    <Route path="/" exact component={Home} />
                </Admin>
            </Switch>
        </BrowserRouter>
    )
}