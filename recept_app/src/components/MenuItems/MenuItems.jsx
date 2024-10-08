import styles from "./MenuItems.module.css";
import { useState, useEffect } from "react"
import fetchData from "../../functions/fetchData"
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MenuItems({ heading, url }) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchData(url, setMenuItems);
    }, [url]);

    return (
        <>
            <List className={styles.menuItem}>
                <ListItem>
                    <Typography variant="h4">
                        {heading}
                    </Typography>
                </ListItem>
                <Divider />
                {menuItems.map((item, index) =>
                    <ListItem key={item.name || index}>
                        <ListItemButton component={Link} to={`/categories/${item.name}`}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default MenuItems