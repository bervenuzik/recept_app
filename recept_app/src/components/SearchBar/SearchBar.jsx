import styles from "./SearchBar.module.css"
import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
    return (
        <Box className={styles.searchBar}>
            <TextField
                variant="standard"
                placeholder="Search..."
                size="large"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon fontSize="medium" />
            </IconButton>
        </Box>
    );
}

export default SearchBar;