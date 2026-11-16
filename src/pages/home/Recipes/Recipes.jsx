import RecipeCard from './RecipeCard'
import './recipes.css'
export default function Recipes({ result }) {
  if (result.isLoading) {
    return (
      <p role="status">Chargement des recettes...</p>
    )
  }
  if (result.isError) {
    return (
      <p role="alert">{result.error.message}</p>
    )
  }
  const meals = result.data?.meals ?? []
  if (!meals.length) {
    return (
      <p>Aucune recette trouvée.</p>
    )
  }
  return (
    <div id="recipes">
      {meals.map((recipe) => {
        return (
          <RecipeCard recipe={recipe} key={recipe.idMeal} />
        )
      })}
    </div>
  )
}
