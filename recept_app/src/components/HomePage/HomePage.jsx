import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { CircularProgress, Box } from "@mui/material";
import doFetch from "../../functions/fetchData.js";
import CardsGrid from "../CardsGrid/CardsGrid.jsx";
import Context from "../AppContext/AppContext.jsx";
import ScrollToTopArrow from "../ScrollToTopArrow/ScrollToTopArrow.jsx";
import HomepageButtons from "../HomepageButtons/HomepageButtons.jsx";
import headerImage from "../../assets/images/Green bar.jpg";

function HomePage() {
    const [loading, setLoading] = useState(true);
    const { setDrinks, drinks } = useContext(Context);

    useEffect(() => {
        doFetch("https://recept2-siden.reky.se/recipes", (data) => {
            setDrinks(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className={styles.home}>
            <HomepageButtons />
            <img 
                src={headerImage} 
                alt="Large Header" 
                className={styles.headerImage} 
            />
            {loading && <CircularProgress size={"150px"} />}
            {(!loading && drinks) && <CardsGrid drinks={drinks} />}
            <ScrollToTopArrow />
        </div>
    );
}

export default HomePage;