import './App.css';
import './page-specific-styles/single-pokemon.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Landing from './Pages/Landing';
import OverView from './Pages/OverView';
import SinglePokemon from './Pages/SinglePokemon';
function App() { 

  return (
    <BrowserRouter>
      <div className="App">
        <div className='header'>
          <Header/>
        </div>
        <div className='body'>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/pokedex' element={<OverView/>}/>
            <Route path='/pokemon/:id' element={<SinglePokemon/>}/>
            <Route path='*' element={<h1>404 - Page Not Found</h1>}/>  
          </Routes>    
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
