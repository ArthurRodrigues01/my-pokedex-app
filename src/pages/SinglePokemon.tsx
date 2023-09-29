import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonData, getMaxNumberOfPokemons, getGen } from '../functions/poke-functions'
import PKMNViewer from '../components/PKMNViewer'
import PaginationBar from '../components/PaginationBar'
import LoadingFeedback from '../components/LoadingFeedback'
import { CenteredPage } from '../components/generalComponents'
import { Content } from '../others/custom-types'


function preloadImage(currentPKMNId: number, count = 1 ) {
  for (let i = 1; i <= count; i++) {
    const item = document.createElement('link')
    item.rel = 'preload'
    item.as = 'image'
    item.href = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPKMNId + i}.png` 
    document.head.appendChild(item)
  }
}

function preloadPage(currentPKMNId: number, count = 1 ) {
  for (let i = 1; i <= count; i++) {
    const item = document.createElement('link')
    item.rel = 'preload'
    item.as = 'fetch'
    item.type = 'aplication/json'
    item.crossOrigin = 'anonymous'
    item.href = `https://pokeapi.co/api/v2/pokemon/${currentPKMNId + i}` 
    
    const subItem = document.createElement('link')
    subItem.rel = 'preload'
    subItem.as = 'fetch'
    subItem.type = 'aplication/json'
    subItem.crossOrigin = 'anonymous'
    subItem.href = `https://pokeapi.co/api/v2/pokemon-species/${currentPKMNId + i}` 
    
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
      preloadImage(content.id, 3)
      preloadPage(content.id, 3)
    }
  }, [content])
  
  if (isFinite(Number(slug)) && Number(slug) <= maxNumberOfPokemons && Number(slug) != id) setId(Number(slug))

  if (content == undefined || (content.id != Number(slug) && isFinite(Number(slug)))) return <CenteredPage><LoadingFeedback/></CenteredPage>

  return (
    <CenteredPage>
      <PKMNViewer id={content.id} gen={getGen(content.id)} name={content.name} height={content.height} weight={content.weight} types={content.types} pokedex_entries={content.pokedex_entries} sprite_image_link={content.image} />
      <PaginationBar currentPage={content.id} growth={3} maxPages={maxNumberOfPokemons}/>
    </CenteredPage>
  )
}

export default SinglePokemon
