import { Fab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import LOCAL_STORAGE_KEY from "../Variables/favoritesKey.js";

function FavoritsHeart({ drink, ...props }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const favoritesLS = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!favoritesLS)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    const favorites = favoritesLS ? JSON.parse(favoritesLS) : [];

    for (let item of favorites) {
      if (item._id == drink._id) setIsAdded(true);
    }
  }, [drink]);

  function handleClick() {
    setIsAdded((prev) => {
      const newValue = !prev;
      const favoritesLS = localStorage.getItem(LOCAL_STORAGE_KEY);
      const favorites = favoritesLS ? JSON.parse(favoritesLS) : [];
      const isExisting = favorites.find((item) => {
        return item._id == drink._id;
      });

      if (newValue) {
        if (!isExisting) {
          favorites.push(drink);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
        }
      }
      if (!newValue) {
        const filtredFavorites = favorites.filter((element) => {
          return element._id !== drink._id;
        });
        localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(filtredFavorites));
      }
      window.dispatchEvent(new Event("storageChanged"));
      return newValue;
    });
  }

  return (
    <span {...props} onClick={handleClick}>
      <Fab size="small" aria-label="like">
        <FavoriteIcon color={isAdded ? "error" : ""} />
      </Fab>
    </span>
  );
}

export default FavoritsHeart;
