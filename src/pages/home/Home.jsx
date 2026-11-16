import { useState } from 'react'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import './home.css'

export default function Home({ search, setSearch }) {
  const [category, setCategory] = useState('Beef')
  const term = search.trim()

  const changeCategory = (category) => {
    setCategory(category)
    setSearch('')
  }

  return (
    <section>
      <Categories
        categoryProp={term ? '' : category}
        setCategory={changeCategory}
      />
      <Recipes category={category} search={term} />
    </section>
  )
}
