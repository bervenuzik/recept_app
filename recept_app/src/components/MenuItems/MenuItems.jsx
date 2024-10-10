import styles from "./MenuItems.module.css";
import { useState, useEffect } from "react"
import fetchData from "../../functions/fetchData"
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MenuItems({ heading, items }) {
    return (
        <>
            <List className={styles.menuItem}>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary={<Typography variant="h5">{heading}</Typography>} />
                        <ArrowForwardIcon />
                    </ListItemButton>

                </ListItem>

                <Divider />

                {items.map((item, index) =>
                    <ListItem key={item.name || index}>
                        <ListItemButton component={Link} to={`/categories/${item.name}`}>
                            <ListItemText primary={item.name} />
                            <ArrowForwardIcon />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default MenuItems