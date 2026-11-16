import { useEffect, useState } from 'react'
import { getCategories } from '../../../services/theMealDbApi'

export default function Categories({ categoryProp, setCategory }) {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    let active = true
    getCategories()
      .then((data) => { if (active) setCategories(data.categories ?? []) })
      .catch((error) => { if (active) setError(error) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])
  if (loading) return <p role="status">Chargement des catégories...</p>
  if (error) return <p role="alert">{error.message}</p>
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
