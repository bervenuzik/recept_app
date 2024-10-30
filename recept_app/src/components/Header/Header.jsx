import { useState } from "react";
import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "../MenuItems/MenuItems";
import DrawerRight from "../DrawerRight/DrawerRight";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Sipp & Slurp.png"; 
import styles from "./Header.module.css";

function Header({ recipes = [] }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <Box className={styles.wrapper}>
                    <Link to="/">
                        <IconButton>
                            <img src={logo} alt="Sipp & Slurp Logo" className={styles.logo} />
                        </IconButton>
                    </Link>

                    <SearchBar recipes={recipes} />

                    <IconButton sx={{ color: "white" }} onClick={() => toggleDrawer(true)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Box>
            </header>

            <DrawerRight open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <MenuItems />
            </DrawerRight>
        </>
    );
}

export default Header;