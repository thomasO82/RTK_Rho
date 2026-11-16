export default function RecipeModal({ recipe }) {
  return (
    <>
      <h2>Ajouter une recette au planning</h2>
      <p>{recipe.strMeal}</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>Date de consommation <input type="datetime-local" required /></label>
        <button disabled>Ajouter</button>
      </form>
      <p>La validation sera disponible au TD2.</p>
    </>
  )
}
