import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MailIcon from "@material-ui/icons/Mail";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import MenuItem from "./MenuItem";
import pageLinks from "./page-links";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
}));

const Menu = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
            <Drawer open={open} handleDrawerClose={handleDrawerClose}>
                <List>
                    {pageLinks.map(({ to, title }) => (
                        <MenuItem to={to} key={title} title={title} icon={AssignmentIcon} />
                    ))}

                    {/* <MenuItem to="/chat/2" key="chat-2" title="Chat 2" icon={AssignmentIcon} /> */}
                </List>
                <List style={{ marginTop: "auto" }}>
                    <MenuItem to="/settings" key="settings" title="Настройки" icon={SettingsIcon} />
                    <MenuItem to="/help" key="help" title="Помощь" icon={MailIcon} />
                    <MenuItem to="/logout" key="logout" title="Выйти" icon={ExitToAppIcon} />
                </List>
            </Drawer>
        </div>
    );
};

export default Menu;
