import { Link, useParams } from 'react-router-dom'
import useToggle from '@hooks/useToggle'
import Recipe from '../../components/Recipe/Recipe'
import { useGetRecipeByIdQuery } from '../../hooks/useMeals'
import './recipeDetails.css'

export default function RecipeDetails() {
  const { idRecipe } = useParams()
  const { toggle, handleToggle } = useToggle(false)
  const result = useGetRecipeByIdQuery(idRecipe)
  if (result.isLoading) return <p role="status">Chargement de la recette...</p>
  if (result.isError) return <p role="alert">{result.error.message}</p>
  const recipe = result.data?.meals?.[0]
  if (!recipe) return <p>Recette introuvable.</p>
  return (
    <Recipe toggle={toggle} handleToggle={handleToggle} recipe={recipe}>
      <div id="recipe">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <aside>
          <Link to="/">{'<'} Retour</Link>
          <h2>{recipe.strMeal}</h2>
          <button id="openModale" onClick={handleToggle}>+ Ajouter au planning</button>
          <p>{recipe.strInstructions}</p>
        </aside>
      </div>
    </Recipe>
  )
}
