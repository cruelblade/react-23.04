import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../Layout";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route
          exact
          path="/chat/:chatId"
          render={(obj) => <Layout chatId={Number(obj.match.params.chatId)} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Router;
