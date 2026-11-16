import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Courses from './pages/courses/Courses'
import Planning from './pages/planning/Planning'
import Header from './components/header/Header'
import RecipeDetails from './pages/Recipe/RecipeDetails'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/recipe/:idRecipe" element={<RecipeDetails />} />
        </Routes>
      </main>
    </>
  )
}
