import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Profile from '../Profile';

class Router extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={ Layout } />
      <Route exact path='/profile/' render={ () => <Profile userName={
        prompt('Введите ваше имя', 'Я')
      }/> } />
      <Route
        exact
        path='/chat/:cid/'
        render={
          obj => <Layout cid={ Number(obj.match.params.cid) }/>
        }
      />
      </Switch>
    )
  }
}

export default Router;