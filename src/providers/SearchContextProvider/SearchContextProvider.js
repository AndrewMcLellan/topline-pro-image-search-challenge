import React, { createContext, useContext, useState } from 'react';
 
const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [results, setResults] = useState({
    searchTerm: '',
    results: []
  });

  return (
    <SearchContext.Provider
      value={{
        results,
        setResults
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const searchContext = useContext(SearchContext);

  if (searchContext === 'undefined') {
    throw new Error('search context must be invoked within the provider');
  }

  return searchContext;
}

export default useSearchContext;
