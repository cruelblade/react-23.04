import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import Chats from "../Chats";
import Help from "../Help";
import Settings from "../Settings";
import Home from "../Home";
import EmptyPage from "../EmptyPage";

const RootRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/chat/:id">
                    <Chats />
                </Route>
                <Route path="/settings" component={Settings}>
                    {/* <Settings /> */}
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route>
                    <EmptyPage />
                </Route>
            </Switch>
        </Layout>
    );
};

export default RootRouter;
