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
import { Link, useLocation, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function MenuItems({ heading, url  ,onClick }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData(url, setMenuItems);
  }, [url]);

const {categoryName} = useParams()
//i use location for favorites becouse i cant read catefory id on FavoritePage, but i need to highlight category in menu 
const location = useLocation().pathname;

  return (
    <>
      <List className={styles.menuItem}>
        <ListItem>
            <ListItemText
              primary={<Typography variant="h5">{heading}</Typography>}
            />
        </ListItem>
        <Divider />
        <ListItem className={location == "/favorites" ? styles.highlighted : ''} >
            <ListItemButton component={Link} to={`/favorites`}>
                <ListItemText primary={<Typography variant="h5">{"Favoriter"}</Typography>}/>
                <ArrowForwardIcon />
              </ListItemButton>
        </ListItem>
        <Divider />
        {menuItems.map((item, index) => {
        const isSelected = categoryName == item.name;
          return (
            <ListItem onClick={onClick} className={isSelected ? styles.highlighted : ''}  key={item.name || index}>
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
