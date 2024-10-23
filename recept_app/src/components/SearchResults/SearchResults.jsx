import { useLocation } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard'; 
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] }; 

  
  return (
    <div>
      <h1>Sökresultat</h1>
      <div className={styles.cardGrid}>
        {results.length > 0 ? (
          results.map((recipe) => (
            <DrinkCard key={recipe._id} drink={recipe} />  
          ))
        ) : (
          <p>Inga funna recept</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;