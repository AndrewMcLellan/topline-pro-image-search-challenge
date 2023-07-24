import { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";


const SearchBarInput = ({ handleSetResults, setError }) => {
  const [serachTerm, setSearchTerm] = useState('');

  return (
    <>
      <Input 
        className='search-input' 
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
        type='text' 
        data-testid='test-search-input'
      />
      <Button 
        className='search-button'
        onClick={() => {
          handleSetResults(serachTerm)
          // In case there is an error, set it back to an empty string and let the state update if there is a new error. 
          setError('')
        }}
        disabled={!serachTerm.length}
        data-testid='test-search-button'
        label="Go"
      />
    </>
  )
}

export default SearchBarInput;
