import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchBar />} />
          {/* <Route path='/details' element={<ImageDetails />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
