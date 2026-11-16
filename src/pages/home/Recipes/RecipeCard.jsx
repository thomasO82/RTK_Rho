import useToggle from '@hooks/useToggle'
import { Link } from 'react-router-dom'
import Recipe from '@components/Recipe/Recipe'
export default function RecipeCard({ recipe }) {
  const { toggle, handleToggle } = useToggle(false)
  return (
    <Recipe toggle={toggle} handleToggle={handleToggle} recipe={recipe}>
      <article>
        <Link className="recipe" to={'/recipe/' + recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </Link>
        <button
          aria-label={'Planifier ' + recipe.strMeal}
          onClick={handleToggle}
        >
          + Planifier
        </button>
      </article>
    </Recipe>
  )
}
