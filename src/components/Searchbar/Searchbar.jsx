import './searchbar.css'

export default function Searchbar({ search, setSearch }) {
  return (
    <form
      className="searchbar"
      role="search"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <input
        type="search"
        aria-label="Rechercher une recette"
        placeholder="Rechercher une recette"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
    </form>
  )
}
