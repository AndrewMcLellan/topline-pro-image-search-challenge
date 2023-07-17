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
      />
      <button 
        className='search-button'
        onClick={() => {
          handleSetResults(serachTerm)
        }}
        disabled={!serachTerm.length}
      >
        Go
      </button>
    </>
  )
}

export default SearchBarInput;
