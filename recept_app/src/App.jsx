//import "../normalize.css"
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import GreetingPage from "./components/GreetingPage/GreetingPage";
import HomePage from "./components/HomePage/HomePage";
import TopRatedPage from "./components/TopRatedPage/TopRatedPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { AppContext } from "./components/AppContext/AppContext";
import RecipePage from "./components/RecipePage/RecipePage";
import SearchResultsPage from "./components/SearchResults/SearchResults";
import fetchAllRecipes from './functions/fetchAllRecipes';
import { useEffect, useState } from "react";
import FavoritePage from "./components/Favorite/FavoritePage/FavoritePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import GDPRPage from "./components/GDPRPage/GDPRPage.jsx";
import Cookies from "./components/Cookies/Cookies.jsx";
import AgeDialog from "./components/AgeDialog/AgeDialog.jsx";


function Layout({ recipes }) {
  return (
    <>
      <Header recipes={recipes} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cookies />
    </>
  );
}

function App() {

  const [recipesArray, setRecipesArray] = useState([]);
  const [ageVerified, setAgeVerified] = useState(false);
  const [ageDialogOpen, setAgeDialogOpen] = useState(false);

  useEffect(() => {
    fetchAllRecipes(setRecipesArray);

    // Checks if age has been verified
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified === "true") {
      setAgeVerified(true);
    } else {
      setAgeDialogOpen(true);
    }
  }, []);

  const handleAgeConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setAgeVerified(true);
    setAgeDialogOpen(false);
  };

  const handleAgeReject = () => {
    window.location.href = "https://www.google.com";
  };


  return (
    <AppContext>
      <Routes>
        <Route path="/" element={<Layout recipes={recipesArray} />}>
          <Route index element={<HomePage />} />
          <Route path="/rated" element={<TopRatedPage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/gdpr" element={<GDPRPage />} />
        </Route>
      </Routes>

      {!ageVerified && (
        <AgeDialog open={ageDialogOpen} onConfirm={handleAgeConfirm} onReject={handleAgeReject} />
      )}
    </AppContext>
  );
}

export default App;