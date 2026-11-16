import { useState } from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import './home.css'

export default function Home() {
  const [category, setCategory] = useState('Beef')
  const [search, setSearch] = useState('')
  const term = search.trim()

  const changeCategory = (category) => {
    setCategory(category)
    setSearch('')
  }

  return (
    <section>
      <Searchbar search={search} setSearch={setSearch} />
      <Categories
        categoryProp={term ? '' : category}
        setCategory={changeCategory}
      />
      <Recipes category={category} search={term} />
    </section>
  )
}
