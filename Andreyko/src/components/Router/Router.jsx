import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Profile from '../Profile';

export default class Router extends Component {
  render() {
      return (
          <Switch>
            <Route exact={ true } path='/' component={ Layout } />
            <Route exact={ true } path='/profile/' render={ () => <Profile userName={ prompt('Введите ваше имя', 'Я') }/> } />
            <Route
                exact
                path='/chat/:chatId/'
                render={ obj => <Layout
                    chatId={ Number(obj.match.params.chatId) }/> }
            />
          </Switch>
      )
  }
}