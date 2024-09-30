//import "../normalize.css"
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import GreetingPage from "./components/GreetingPage/GreetingPage";
import HomePage from "./components/HomePage/HomePage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { AppContext } from "./components/AppContext/AppContext";

function App() {
  return (
    <>
      <AppContext>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<GreetingPage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path='/home/grsdg' element={<CategoryPage/>} /> */}
          </Routes>
        </main>
        <Footer />
      </AppContext>
    </>
  );
}
export default App;
