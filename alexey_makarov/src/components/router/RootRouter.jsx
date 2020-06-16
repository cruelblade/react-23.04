import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About";
import Chat from "../Chat/Chat";
import Profile from "../Profile/Profile";
import EmptyPage from "../../pages/EmptyPage";
import {setChats} from "../../actions/chatActions";
import mockPageLinks from "./mockPagelinks";

class RootRouter extends Component {

    componentDidMount() {
        const {getChats} = this.props;
        getChats(mockPageLinks);
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/chats/:chatId" component={Chat}/>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route>
                        <EmptyPage/>
                    </Route>
                </Switch>
            </Layout>
        )
    };

}

const mapStateToProps = store => ({
    chats: store.chats,
});
const mapDispatchToProps = {
    getChats: setChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);