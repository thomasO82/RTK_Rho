import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import './home.css'

export default function Home() {
  const [category, setCategory] = useState('Beef')
  const { search, setSearch } = useOutletContext()
  const term = search.trim()

  const changeCategory = (category) => {
    setCategory(category)
    setSearch('')
  }

  return (
    <section>
      <Categories categoryProp={term ? '' : category} setCategory={changeCategory} />
      <Recipes category={category} search={term} />
    </section>
  )
}
