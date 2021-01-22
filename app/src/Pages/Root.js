import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import PagesIndex from './Index/Index';
import PagesCadastro from './Cadastro/Cadastro'

  const Root = () => {
      return (
        <Router>
            <Switch>
                <Route path='/cadastro' component={PagesCadastro} />
                <Route path='/edit/:id' component={PagesCadastro} />
                <Route path='/' component={PagesIndex} />
            </Switch>
        </Router>
      );
  }

  export default Root;