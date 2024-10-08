import styles from "./SearchBar.module.css"
import React from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <TextField
                variant="standard"
                placeholder="Search..."
                size="small"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    );
}

export default SearchBar;