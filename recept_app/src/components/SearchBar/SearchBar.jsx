import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ recipes = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!recipes || recipes.length === 0) {
      return;
    }

    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredResults(filtered);
  }, [searchTerm, recipes]);

  const handleSearch = () => {
    console.log("Filtrerade resultat:", filteredResults);
    navigate("/search-results", { state: { results: filteredResults } });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Sök efter recept eller ingrediens..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <Button onClick={handleSearch} variant="contained" color="primary">
        SÖK
      </Button>
    </div>
  );
}

export default SearchBar;
