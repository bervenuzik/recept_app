import "./App.css";
import { useState, useEffect } from "react"; 
import Header from "./components/Header/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import TopRatedPage from "./components/TopRatedPage/TopRatedPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { AppContext } from "./components/AppContext/AppContext";
import RecipePage from "./components/RecipePage/RecipePage";
import SearchResultsPage from "./components/SearchResults/SearchResults";
import fetchAllRecipes from './functions/fetchAllRecipes'; 


function Layout({recipes}) {
  return (
    <>
      <Header recipes={recipes} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
function App() {
  const [recipesArray, setRecipesArray] = useState([]);

  useEffect(() => {
    fetchAllRecipes(setRecipesArray);
  }, []);

  
  return (
    <AppContext>
        <Routes>
          <Route path="/" element={<Layout recipes={recipesArray} />}>
            <Route index element={<HomePage />}/>
            <Route path="/rated" element={<TopRatedPage />} />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
          </Route>
        </Routes>
    </AppContext>
  );
}

export default App;