import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import GreetingPage from './components/GreetingPage/GreetingPage'
import HomePage from './components/HomePage/HomePage'
import CategoryPage from './components/CategoryPage/CategoryPage'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<GreetingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/home/grsdg' element={<CategoryPage/>} /> */}
       </Routes>
    <Footer/>
    </>
  )
}
export default App
