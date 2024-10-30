
import styles from "./DrawerRight.module.css";
import fetchData from "../../functions/fetchData";
import styles from "./DrawerRight.module.css"
import MenuItems from "../MenuItems/MenuItems";
import { useState, useEffect } from "react";
import { Drawer, IconButton, ListItem } from "@mui/material";
import { Drawer, IconButton, ListItem} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DrawerRight({ open, onClose }) {
  const categoriesUrl = 'https://recept2-siden.reky.se/categories';
  const [menuItems, setMenuItems] = useState([]);

  const staticLinks = [
    { name: 'Alla drinkar och cocktails', path: '/' },
    { name: 'Topp 10 drinkar', path: '/rated' }
  ];

  useEffect(() => {
    fetchData(categoriesUrl, setMenuItems);
  }, []);

  return (
    <Drawer classes={{ paper: styles.drawerRight }} anchor="right" open={open} onClose={onClose}>
      <ListItem onClick={onClose}>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </ListItem>
      <MenuItems onClick={onClose} heading="Meny" url={categoriesUrl} staticLinks={staticLinks} />
    </Drawer>
  );
}

export default DrawerRight;
