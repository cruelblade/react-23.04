import React, {Component} from "react";
import Header from "../Header/Header";
import ChatList from "../ChatList/ChatList";
import {withStyles} from "@material-ui/core/styles";

const muiStyles = theme => {
    console.log(theme);
    return {
        root: {
            display: 'flex',
            marginTop: theme.spacing(8),
        },
    };
};

class Layout extends Component{

    render() {
        const {classes, children} = this.props;
        return(
            <>
                <Header/>
                <main className={classes.root}>
                    <ChatList/>
                    {children}
                    {/*<Chat name="Ready"/>*/}
                </main>
            </>
        )
    }
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default withStyles(muiStyles)(Layout);