import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonData, getMaxNumberOfPokemons, getGen } from '../functions/poke-functions'
import PokemonCard from '../components/PokemonCard'
import PaginationBar from '../components/PaginationBar'
import LoadingFeedback from '../components/LoadingFeedback'
import { CenteredPage } from '../components/generalComponents'
import { Content } from '../custom-types'


function preloadNextImages(currentPokemonId: number, count = 1 ) {
  for (let i = 1; i <= count; i++) {
    const item = document.createElement('link')
    item.rel = 'preload'
    item.as = 'image'
    item.href = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonId + i}.png` 
    document.head.appendChild(item)
  }
}

function preloadNextPages(currentPokemonId: number, count = 1 ) {
  for (let i = 1; i <= count; i++) {
    const item = document.createElement('link')
    item.rel = 'preload'
    item.as = 'fetch'
    item.type = 'aplication/json'
    item.crossOrigin = 'anonymous'
    item.href = `https://pokeapi.co/api/v2/pokemon/${currentPokemonId + i}` 
    
    const subItem = document.createElement('link')
    subItem.rel = 'preload'
    subItem.as = 'fetch'
    subItem.type = 'aplication/json'
    subItem.crossOrigin = 'anonymous'
    subItem.href = `https://pokeapi.co/api/v2/pokemon-species/${currentPokemonId + i}` 
    
    document.head.appendChild(item)
    document.head.appendChild(subItem)
  }
}

function SinglePokemon() {
  const { slug } = useParams()
  const [maxNumberOfPokemons, setMaxNumberOfPokemons] = useState(1)
  const [id, setId] = useState(1)
  const [content, setContent] = useState<Content>()
  
  useEffect(() => {
    getMaxNumberOfPokemons().then(res => setMaxNumberOfPokemons(res))
    getPokemonData(id).then(res => setContent(JSON.parse(res)))
  }, [id])

  useEffect(() => {
    if (content !== undefined && (content.id == Number(slug) && isFinite(Number(slug)))) {
      preloadNextImages(content.id, 3)
      preloadNextPages(content.id, 3)
    }
  }, [content])
  
  if (isFinite(Number(slug)) && Number(slug) <= maxNumberOfPokemons && Number(slug) != id) setId(Number(slug))

  if (content == undefined || (content.id != Number(slug) && isFinite(Number(slug)))) return <CenteredPage><LoadingFeedback/></CenteredPage>

  return (
    <CenteredPage>
      <PokemonCard id={content.id} gen={getGen(content.id)} name={content.name} height={content.height} weight={content.weight} types={content.types} pokedex_entries={content.pokedex_entries} sprite_src={content.image} />
      <PaginationBar currentPage={content.id} growth={3} maxPages={maxNumberOfPokemons}/>
    </CenteredPage>
  )
}

export default SinglePokemon
