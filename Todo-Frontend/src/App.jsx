import React from 'react'
import AuthPage from './components/Authentication/AuthPage';
import HomePage from './components/Home/HomePage';
import ProjectPage from './components/Project/ProjectPage';
import PageNotFound from './components/Common/PageNotFound'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { routes } from './components/routes';
import ProjectEdit from './components/Project/ProjectEdit';

const App = () => {
  return (
    <Switch>
      <Route exact path={routes.auth} component={AuthPage} />
      <Route exact path={routes.home.index} component={HomePage} />
      <Route exact path={routes.home.project} component={ProjectPage} />
      <Route exact path={routes.home.editProject} component={ProjectEdit} />
      <Route exact path={routes.home.editTodo} component={ProjectEdit} />
      <Redirect exact from={routes.root} to={routes.auth} />
      <Route exact path="*" component={PageNotFound} />
      
    </Switch>
  )
}

export default App;