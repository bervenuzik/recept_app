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
        <div className={styles.buttonGroup}>
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
        </div>
    );
}

export default HomepageButtons;
