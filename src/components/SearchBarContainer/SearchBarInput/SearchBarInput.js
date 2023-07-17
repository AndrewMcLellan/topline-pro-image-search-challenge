import { useState } from "react";
import { fetchImages } from "../../../utils/fetchImages";


const SearchBarInput = ({ handleSetResults }) => {
  const [serachTerm, setSearchTerm] = useState('');
  return (
    <>
      <input 
        className='search-input' 
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
        type='text' 
        data-testid='test-search-input'
      />
      <button 
        className='search-button'
        onClick={() => {
          handleSetResults(serachTerm)
        }}
        disabled={!serachTerm.length}
        data-testid='test-search-button'
      >
        Go
      </button>
    </>
  )
}

export default SearchBarInput;
