import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { Box, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerRight from "../DrawerRight/DrawerRight";
import MenuItems from "../MenuItems/MenuItems";

function Header({ recipes = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!recipes || recipes.length === 0) {
      return;
    }

    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredResults(filtered);
  }, [searchTerm, recipes]);

  const handleSearch = () => {
    console.log('Filtrerade resultat:', filteredResults);
    navigate('/search-results', { state: { results: filteredResults } });
  };

  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <header>
      <Box className={styles.wrapper}>
        <IconButton>logo</IconButton>

        <input
          type="text"
          placeholder="Sök efter recept eller ingrediens..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <Button onClick={handleSearch} variant="contained" color="primary">
          SÖK
        </Button>

        <IconButton onClick={() => toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      <DrawerRight open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <MenuItems />
      </DrawerRight>
    </header>
  );
}

export default Header;
