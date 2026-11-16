import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import { useGetRecipesByCategoryQuery, useGetRecipesBySearchQuery } from '../../hooks/useMeals'
import './home.css'

export default function Home() {
  const [category, setCategory] = useState('Beef')
  const { search, setSearch } = useOutletContext()
  const term = search.trim()
  const resultSearch = useGetRecipesBySearchQuery(term, !!term)
  const resultCategory = useGetRecipesByCategoryQuery(category, !term)
  const changeCategory = (value) => { setCategory(value); setSearch('') }
  return (
    <section>
      <Categories categoryProp={term ? '' : category} setCategory={changeCategory} />
      <Recipes result={term ? resultSearch : resultCategory} />
    </section>
  )
}
