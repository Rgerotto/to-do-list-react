

const Search = ({search, setSearch}) => {
  return (
    <div className="container-search">
        <h2>Pesquisar</h2>
        <input type="text" value={search}  onChange={(event) => setSearch(event.target.value)} placeholder="digite para procurar!"/>


    </div>
  )
}

export default Search