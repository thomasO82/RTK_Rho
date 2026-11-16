import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import {
  getRecipesByCategory,
  getRecipesBySearch,
} from '../../services/theMealDbApi'
import './home.css'
export default function Home() {
  const [category, setCategory] = useState('Beef')
  const [result, setResult] = useState({
    isLoading: true,
  })
  const { search, setSearch } = useOutletContext()
  const term = search.trim()
  useEffect(() => {
    setResult({ isLoading: true })

    const request = term
      ? getRecipesBySearch(term)
      : getRecipesByCategory(category)

    request
      .then((data) => {
        setResult({ data })
      })
      .catch((error) => {
        setResult({ error, isError: true })
      })
  }, [term, category])
  const changeCategory = (value) => {
    setCategory(value)
    setSearch('')
  }
  return (
    <section>
      <Categories
        categoryProp={term ? '' : category}
        setCategory={changeCategory}
      />
      <Recipes result={result} />
    </section>
  )
}
