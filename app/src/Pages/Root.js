import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import PagesIndex from './Index/Index';
import PagesBusca from './Busca/Busca';
import PagesCadastro from './Cadastro/Cadastro';

  const Root = () => {
      return (
        <Router>
            <Switch>
                <Route path='/processos' component={PagesBusca} />
                <Route path='/cadastro' component={PagesCadastro} />
                <Route path='/editar/:id' component={PagesCadastro} />
                <Route path='/' component={PagesIndex} />
            </Switch>
        </Router>
      );
  }

  export default Root;