import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

const MenuItem = ({ title, icon: Icon, ...linkProps }) => {
    return (
        <Link {...linkProps}>
            <ListItem button>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
        </Link>
    );
};

export default MenuItem;
