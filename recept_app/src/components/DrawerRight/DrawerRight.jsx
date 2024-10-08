import fetchData from "../../functions/fetchData";
import MenuItems from "../MenuItems/MenuItems";
import { useState, useEffect } from "react";
import { Drawer, IconButton, ListItem, ListItemButton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DrawerRight({ open, onClose }) {
    const categoriesUrl = 'https://recept2-siden.reky.se/categories';
    const [menuItems, setMenuItems] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen);
    };

    useEffect(() => {
        fetchData(categoriesUrl, setMenuItems);
    }, []);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <ListItem onClick={onClose}>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </ListItem>
            {/* TODO RENAME prop url */}
            <MenuItems heading={'Categories'} url={categoriesUrl} />
        </Drawer>
    )
}

export default DrawerRight