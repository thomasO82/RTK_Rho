import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import { getRecipesByCategory, getRecipesBySearch } from '../../services/theMealDbApi'
import './home.css'

export default function Home() {
  const [category, setCategory] = useState('Beef')
  const [result, setResult] = useState({ isLoading: true })
  const { search, setSearch } = useOutletContext()
  const term = search.trim()
  useEffect(() => {
    let active = true
    async function loadRecipes() {
      setResult({ isLoading: true })
      try {
        const data = term ? await getRecipesBySearch(term) : await getRecipesByCategory(category)
        if (active) setResult({ data })
      } catch (error) {
        if (active) setResult({ error, isError: true })
      }
    }
    loadRecipes()
    return () => { active = false }
  }, [term, category])
  const changeCategory = (value) => { setCategory(value); setSearch('') }
  return (
    <section>
      <Categories categoryProp={term ? '' : category} setCategory={changeCategory} />
      <Recipes result={result} />
    </section>
  )
}
