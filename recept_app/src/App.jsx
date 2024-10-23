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

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AppContext>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/rated" element={<TopRatedPage />} />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Route>
        </Routes>
    </AppContext>
  );
}
export default App;
