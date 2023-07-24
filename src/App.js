import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SearchBarContainer from './components/SearchBarContainer/SearchBarContainer';
import ImageDetails from './components/ImageDetails/ImageDetails';
import { SearchContextProvider } from './providers/SearchContextProvider/SearchContextProvider';
function App() {
  return (
    <div className='App'>
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchBarContainer />} />
            <Route path='/details' element={<ImageDetails />}/>
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </div>
  );
}

export default App;
