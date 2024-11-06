import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { CircularProgress, Box } from "@mui/material";
import doFetch from "../../functions/fetchData.js";
import CardsGrid from "../CardsGrid/CardsGrid.jsx";
import Context from "../AppContext/AppContext.jsx";
import ScrollToTopArrow from "../ScrollToTopArrow/ScrollToTopArrow.jsx";
import HomepageButtons from "../HomepageButtons/HomepageButtons.jsx";
import headerImage from "../../assets/Images/Green bar.jpg";
import { useRef } from "react";

function HomePage() {
    const [loading, setLoading] = useState(true);
    const { setDrinks, drinks } = useContext(Context);
    const drinksRef = useRef(null);  

    const scrollToDrinks = () => {
        drinksRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        doFetch("https://recept2-siden.reky.se/recipes", (data) => {
            setDrinks(data);
            setLoading(false);
        });
    }, [setDrinks]);

    return (
        <div className={styles.home}>
            <HomepageButtons scrollToDrinks={scrollToDrinks} />
            <img 
                src={headerImage} 
                alt="Large Header" 
                className={styles.headerImage} 
            />
            {loading && <CircularProgress size={"150px"} />}
            {(!loading && drinks) && (
                <div ref={drinksRef} style={{ width: '100%' }}> 
                    <CardsGrid drinks={drinks} />
                </div>
            )}
            <ScrollToTopArrow />
        </div>
    );
}

export default HomePage;
