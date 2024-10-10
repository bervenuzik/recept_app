import styles from "./Header.module.css";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItems from "../MenuItems/MenuItems";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerRight from "../DrawerRight/DrawerRight";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen);
    };

    return (
        <>
            <header>
                <Box className={styles.wrapper}>
                    <IconButton>
                        logo
                    </IconButton>
                    
                    <SearchBar />

                    <IconButton onClick={() => toggleDrawer(true)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Box>
            </header>

            <DrawerRight open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <MenuItems />
            </DrawerRight>
        </>
    )

}

export default Header