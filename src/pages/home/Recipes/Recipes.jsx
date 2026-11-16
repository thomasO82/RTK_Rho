import { useEffect, useState } from 'react'
import { getRecipesBySearch, getRecipesByCategory } from '../../../services/theMealDbApi'
import RecipeCard from './RecipeCard'
import './recipes.css'

export default function Recipes({ category, search }) {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const request = search
      ? getRecipesBySearch(search)
      : getRecipesByCategory(category)

    request
      .then((data) => {
        setRecipes(data.meals ?? [])
      })
      .catch(() => {
        setRecipes([])
      })
  }, [category, search])

  return (
    <div id="recipes">
      {recipes.length === 0 && <p>Aucune recette disponible.</p>}
      {recipes.map((recipe) => {
        return (
          <RecipeCard recipe={recipe} key={recipe.idMeal} />
        )
      })}
    </div>
  )
}
