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
                sx={{
                    input: {
                      color: "white",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "white",
                    },
                  }}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon 
                fontSize="medium"
                sx={{ color: "white" }} 
                />
            </IconButton>
        </Box>
    );
}

export default SearchBar;