import styles from "./DrawerRight.module.css"
import MenuItems from "../MenuItems/MenuItems";
import { useState, useEffect } from "react";
import { Drawer, IconButton, ListItem, ListItemButton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import fetchCategories from "../../functions/fetchCategories";

function DrawerRight({ open, onClose }) {
    const [menuItems, setMenuItems] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen);
    };

    useEffect(() => {
        fetchCategories(setMenuItems);
    }, [menuItems]);

    return (
        <Drawer classes={{ paper: styles.drawerRight}} anchor="right" open={open} onClose={onClose}>
            <ListItem onClick={onClose}>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </ListItem>
            {/* TODO bold when selected */}
            {/* TODO RENAME prop url */}
            <MenuItems heading={'Categories'} items={menuItems}/>
        </Drawer>
    )
}

export default DrawerRight