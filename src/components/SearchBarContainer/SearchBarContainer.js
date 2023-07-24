import { useEffect, useState } from 'react';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import './search_bar.scss';
import { fetchImages } from '../../utils/fetchImages';
import ImageSearchIndex from '../ImageSearchIndex/ImageSearchIndex';
import useSearchContext from '../../providers/SearchContextProvider/SearchContextProvider';

export const SearchBarContainer = () => {
  // const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const { results, setResults } = useSearchContext();

  const handleSetResults = async (queryString = '', perPage) => {
    // added per_page here becasue I was going to add an option for users to select how many results to show per page, 
    // but I just didn't have enough time. 
    
    const { searchResults, error = ''} = await fetchImages({ q: queryString, per_page: perPage }); 
    if (!error) {
      setResults({ images: searchResults, searchTerm: queryString });
    } else {
      setError(error)
    }
  }

  useEffect(() => {
    // provide something to be seen on page load instead of just showing the search bar.  
    if (!results?.images?.length) {
      handleSetResults('', 200);
    }
  }, [])

  const renderError = () => (
    error && <div>{error}</div>
  )

  const renderResults = () => (
    results?.images?.length && <ImageSearchIndex searchResults={results.images} />
  )

  const renderSearchBarInput = () => (
    <SearchBarInput setError={setError} handleSetResults={handleSetResults} />
  )

  return (
    <div className='search-bar-root'>
      <h2>
        Search Pixabay for Images! 
      </h2>
      {renderSearchBarInput()}
      {renderResults()}
      {renderError()}
    </div>
  )
}

export default SearchBarContainer;
