export default function Searchbar({ search, setSearch }) {
  return (
    <form
      onSubmit={(event) => {
        return event.preventDefault()
      }}
      role="search"
    >
      <input
        aria-label="Rechercher une recette"
        type="search"
        placeholder="Rechercher une recette"
        value={search}
        onChange={(event) => {
          return setSearch(event.target.value)
        }}
      />
    </form>
  )
}
