import styles from "./MenuItems.module.css";
import { useState, useEffect} from "react";
import fetchData from "../../functions/fetchData";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function MenuItems({ heading, url }) {
  const [menuItems, setMenuItems] = useState([]);
//   const {chosenCategory , setChosenCategory}  = useContext(Context)
  useEffect(() => {
    fetchData(url, setMenuItems);
  }, [url]);

const {categoryName} = useParams()

  
  

  return (
    <>
      <List className={styles.menuItem}>
        <ListItem>
            <ListItemText
              primary={<Typography variant="h5">{heading}</Typography>}
            />
        </ListItem>
        <Divider />
        {menuItems.map((item, index) => {
        const isSelected = categoryName == item.name;
        console.log(item.name+" " + isSelected)
          return (
            <ListItem className={isSelected ? styles.highlighted : ''}  key={item.name || index}>
              <ListItemButton  component={Link} to={`/categories/${item.name}`}>
                <ListItemText primary={item.name} />
                <ArrowForwardIcon />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default MenuItems;
