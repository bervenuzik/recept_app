import { Button } from "@mui/material";
//import styles from "./DetaileDrink.module.css";
import { Link } from "react-router-dom";

export default function CategoryButton({ children  , link}) {
  return(
    <Link to={link}>
        <Button size="small"  variant="outlined">
         {children}
        </Button>
    </Link>
  )
}
