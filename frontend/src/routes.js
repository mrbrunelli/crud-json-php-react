import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Admin from './Admin'
import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Admin>
                    <Route path="/" exact component={Home} />
                    <Route path="/cadastrar" component={Cadastrar} />
                </Admin>
            </Switch>
        </BrowserRouter>
    )
}