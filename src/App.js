import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SearchBarContainer from './components/SearchBarContainer/SearchBarContainer';
import ImageDetails from './components/ImageDetails/ImageDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchBarContainer />} />
          <Route path='/details' element={<ImageDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
