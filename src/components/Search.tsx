import './Search.css'

const Search = () => {
  return (
    <div>
      <div className="search">
        <form action="" className='formSearch'>
          <input 
            type="text" 
            name="" 
            id="inputSearch"
            placeholder="Type something......"
          />
          <button className='btnSearch'>
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search