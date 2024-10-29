import styles from "./DrawerRight.module.css"
import MenuItems from "../MenuItems/MenuItems";
import { Drawer, IconButton, ListItem} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DrawerRight({ open, onClose }) {
    const categoriesUrl = 'https://recept2-siden.reky.se/categories';
   
    return (
        <Drawer classes={{ paper: styles.drawerRight}} anchor="right" open={open} onClose={onClose}>
            <ListItem onClick={onClose}>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </ListItem>
            {/* TODO bold when selected */}
            {/* TODO RENAME prop url */}
            <MenuItems onClick={onClose} heading={'Categories'} url={categoriesUrl} />
        </Drawer>
    )
}

export default DrawerRight