import { useEffect, useState } from 'react';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import './search_bar.scss';
import { fetchImages } from '../../utils/fetchImages';

export const SearchBarContainer = () => {
  const [results, setResults] = useState(null);

  const handleSetResults = async (queryString) => {
    const searchResults = await fetchImages({ q: queryString });
    setResults(searchResults);
  }

  return (
    <div className='search-bar-root'>
      <h2>
        Search Pixabay for Images! 
      </h2>
      <SearchBarInput handleSetResults={handleSetResults} />
    </div>
  )
}

export default SearchBarContainer;
