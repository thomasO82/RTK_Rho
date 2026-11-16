export default function Searchbar({ search, setSearch }) {
  return (
    <form onSubmit={(event) => event.preventDefault()} role="search">
      <input aria-label="Rechercher une recette" type="search" placeholder="Rechercher une recette"
        value={search} onChange={(event) => setSearch(event.target.value)} />
    </form>
  )
}
