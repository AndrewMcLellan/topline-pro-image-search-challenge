import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import useSearchContext from "../../../providers/SearchContextProvider/SearchContextProvider";

const SearchBarInput = ({ handleSetResults, setError }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { results: { searchTerm: userInput = ''} } = useSearchContext();

  useEffect(() => {
    if (userInput) {
      setSearchTerm(userInput);
    }
  }, []);

  
  return (
    <>
      <Input 
        className='search-input' 
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
        type='text' 
        data-testid='test-search-input'
        value={searchTerm}
      />
      <Button 
        className='search-button'
        onClick={() => {
          handleSetResults(searchTerm)
          // In case there is an error, set it back to an empty string and let the state update if there is a new error. 
          setError('')
        }}
        disabled={!searchTerm.length}
        data-testid='test-search-button'
        label="Go"
      />
    </>
  )
}

export default SearchBarInput;
