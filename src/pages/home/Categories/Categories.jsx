import { useGetCategoriesQuery } from '../../../hooks/useMeals'

export default function Categories({ categoryProp, setCategory }) {
  const result = useGetCategoriesQuery()
  if (result.isLoading) return <p role="status">Chargement des catégories...</p>
  if (result.isError) return <p role="alert">{result.error.message}</p>
  const categories = result.data?.categories ?? []
  if (!categories.length) return <p>Aucune catégorie trouvée.</p>
  return (
    <ul id="categories">
      {categories.map((category) => (
        <li key={category.idCategory} className={categoryProp === category.strCategory ? 'active' : ''}>
          <button onClick={() => setCategory(category.strCategory)}>{category.strCategory}</button>
        </li>
      ))}
    </ul>
  )
}
