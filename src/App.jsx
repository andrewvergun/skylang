
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  

  return (
    <BrowserRouter>
    
      <Header/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
