import "./App.css";
import { useState, useEffect } from "react"; 
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import TopRatedPage from "./components/TopRatedPage/TopRatedPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { AppContext } from "./components/AppContext/AppContext";
import RecipePage from "./components/RecipePage/RecipePage";
import SearchResultsPage from "./components/SearchResults/SearchResults";
import fetchAllRecipes from './functions/fetchAllRecipes'; 

function App() {
  const [recipesArray, setRecipesArray] = useState([]);

  useEffect(() => {
    fetchAllRecipes(setRecipesArray);
  }, []);

  
  return (
    <AppContext>
      <Header recipes={recipesArray} /> 
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rated" element={<TopRatedPage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </AppContext>
  );
}

export default App;
