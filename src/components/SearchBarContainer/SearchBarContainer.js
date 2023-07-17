import { useEffect, useState } from 'react';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import './search_bar.scss';
import { fetchImages } from '../../utils/fetchImages';
import ImageSearchIndex from '../ImageSearchIndex/ImageSearchIndex';

export const SearchBarContainer = () => {
  const [results, setResults] = useState(null);

  const handleSetResults = async (queryString) => {
    const searchResults = await fetchImages({ q: queryString });
    setResults(searchResults.hits);
  }

  return (
    <div className='search-bar-root'>
      <h2>
        Search Pixabay for Images! 
      </h2>
      <SearchBarInput handleSetResults={handleSetResults} />
      {results && (
        <ImageSearchIndex searchResults={results} />
      )}
    </div>
  )
}

export default SearchBarContainer;
