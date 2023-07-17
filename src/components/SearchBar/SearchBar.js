import './search_bar.scss';

export const SearchBar = () => {
  return (
    <div className='search-bar-root'>
      <h2>
        Search Pixabay for Images! 
      </h2>
      <input className='search-input' type='text' />
      <button className='search-button'>Go</button>
    </div>
  )
}

export default SearchBar;
