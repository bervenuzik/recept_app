import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomepageButtons.module.css";

function HomepageButtons() {
    const navigate = useNavigate();

    const scrollToDrinks = () => {
        window.scrollBy({
            top: window.innerHeight, 
            behavior: "smooth"
        });
    };

    const goToTopRated = () => {
        navigate("/rated");
    };

    const goToAboutUs = () => {
        navigate("/about-us");
    };

    return (
        <Box className={styles.buttonGroup} style={{ gap: "20px", display: "flex" }}>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={goToTopRated}
                className={styles.topRatedButton}
            >
                Top 10 drinkar
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={goToAboutUs}
                className={styles.aboutButton}
            >
                Om oss
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={scrollToDrinks}
                className={styles.scrollButton}
            >
                Till alla drinkar
            </Button>
        </Box>
    );
}

export default HomepageButtons;
