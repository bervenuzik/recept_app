//import "../normalize.css"
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import GreetingPage from "./components/GreetingPage/GreetingPage";
import HomePage from "./components/HomePage/HomePage";
import TopRatedPage from "./components/TopRatedPage/TopRatedPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import {AppContext}  from "./components/AppContext/AppContext";
import RecipePage from "./components/RecipePage/RecipePage";

function App() {
  return (
    <AppContext>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rated" element={<TopRatedPage/>}/>
            <Route path="/categories/:categoryName" element={<CategoryPage/>}/>
            <Route path="/recipe/:id" element={<RecipePage/>}/>
          </Routes>
        </main>
        <Footer/>
    </AppContext>
  );
}
export default App;
