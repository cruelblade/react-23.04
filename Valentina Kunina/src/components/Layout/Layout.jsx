import React from "react";
import Menu from "../Menu";
import Chat from "../../pages/Chats";
import { makeStyles, Container } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100%",
    },
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(4),
    },
}));

function Layout({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Menu open={true} />
            <Container maxWidth="lg" className={classes.container}>
                {children}
            </Container>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
