import { useEffect, useState } from 'react';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import './search_bar.scss';
import { fetchImages } from '../../utils/fetchImages';
import ImageSearchIndex from '../ImageSearchIndex/ImageSearchIndex';

export const SearchBarContainer = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleSetResults = async (queryString = '', perPage) => {
    const { searchResults, error = ''} = await fetchImages({ q: queryString, per_page: perPage });
    if (!error) {
      setResults(searchResults.hits);
    } else {
      setError(error)
    }
  }

  useEffect(() => {
    handleSetResults('', 200);
  }, [])

  return (
    <div className='search-bar-root'>
      <h2>
        Search Pixabay for Images! 
      </h2>
      <SearchBarInput setError={setError} handleSetResults={handleSetResults} />
      {results && (
        <ImageSearchIndex searchResults={results} />
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  )
}

export default SearchBarContainer;
