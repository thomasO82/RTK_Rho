import { useEffect, useState } from 'react'
import { getCategories } from '../../../services/theMealDbApi'
export default function Categories({ categoryProp, setCategory }) {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data.categories ?? [])
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (loading) {
    return (
      <p role="status">Chargement des catégories...</p>
    )
  }
  if (error) {
    return (
      <p role="alert">{error.message}</p>
    )
  }
  if (!categories.length) {
    return (
      <p>Aucune catégorie trouvée.</p>
    )
  }
  return (
    <ul id="categories">
      {categories.map((category) => {
        return (
          <li
            key={category.idCategory}
            className={categoryProp === category.strCategory ? 'active' : ''}
          >
            <button
              onClick={() => {
                return setCategory(category.strCategory)
              }}
            >
              {category.strCategory}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
