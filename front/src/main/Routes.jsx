import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/Home'
import Consulta from '../components/consulta/consulta'
import Gestao from '../components/consulta/gestao'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/consulta' component={Consulta} />
        <Route path='/gestao' component={Gestao} />
        <Redirect from='*' to='/' />
    </Switch>