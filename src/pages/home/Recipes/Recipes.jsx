import { useEffect, useState } from 'react'
import { getRecipesBySearch, getRecipesByCategory } from '../../../services/theMealDbApi'
import RecipeCard from './RecipeCard'
import './recipes.css'

export default function Recipes({ category, search }) {
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setRecipes(null)
    setError(null)

    const request = search
      ? getRecipesBySearch(search)
      : getRecipesByCategory(category)

    request
      .then((data) => {
        setRecipes(data.meals ?? [])
      })
      .catch(setError)
  }, [category, search])

  if (error) {
    return (
      <p role="alert">{error.message}</p>
    )
  }
  if (recipes === null) {
    return (
      <p role="status">Chargement des recettes...</p>
    )
  }
  if (!recipes.length) {
    return (
      <p>Aucune recette trouvée.</p>
    )
  }

  return (
    <div id="recipes">
      {recipes.map((recipe) => {
        return (
          <RecipeCard recipe={recipe} key={recipe.idMeal} />
        )
      })}
    </div>
  )
}
