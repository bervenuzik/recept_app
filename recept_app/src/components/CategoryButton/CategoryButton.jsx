import { Button } from "@mui/material";
//import styles from "./DetaileDrink.module.css";


export default function CategoryButton({ children  , onClick}) {
  return(
        <Button onClick={onClick} size="small"  variant="outlined">
         {children}
        </Button>
  )
}
