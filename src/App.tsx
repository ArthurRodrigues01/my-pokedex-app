import Header from './components/Header'
import SinglePokemon from './pages/SinglePokemon'
import MainPage from './pages/MainPage'
import Redirect from './pages/Redirect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>  
        <Route path='/pokemon/:slug' element={<SinglePokemon/>}/>  
        <Route path='/pokemon/' element={<Redirect destination='/pokemon/1'/>}/>  
        <Route path='*' element={<h1>404 - Page Not Found</h1>}/>  
      </Routes>  
    </BrowserRouter>
  )
}

export default App
