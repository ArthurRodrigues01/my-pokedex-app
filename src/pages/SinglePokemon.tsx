import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonData, getMaxNumberOfPokemons } from '../functions/poke-functions'
import PokemonCard from '../components/PokemonCard'
import PaginationBar from '../components/PaginationBar'
import LoadingFeedback from '../components/LoadingFeedback'
import { CenteredPage } from '../components/generalComponents'
import { PokemonData } from '../types'

function SinglePokemon() {
  const { slug } = useParams()
  const [pokemonData, setPokemonData] = useState<PokemonData>()

  useEffect(() => {
    getMaxNumberOfPokemons().then(res => {
      const id = slugToId(slug, res)
  
      getPokemonData(id).then(res => { 
        setPokemonData(res)
      })

      preloadNextPages(id, 3)
    })
  }, [slug])


  if (pokemonData == undefined) return <CenteredPage><LoadingFeedback/></CenteredPage>

  return (
    <CenteredPage>
      <PokemonCard {...pokemonData}/>
      <PaginationBar current={pokemonData.id} growth={3} max={pokemonData.max_number_of_pokemons}/>
    </CenteredPage>
  )

}

function slugToId(slug: string | undefined, max: number) {
  return !isNaN(Number(slug)) && 0 < Number(slug) && Number(slug) <= max ? Number(slug) : 1
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

    const image = document.createElement('link')
    image.rel = 'preload'
    image.as = 'image'
    image.href = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonId + i}.png` 
    
    document.head.appendChild(item)
    document.head.appendChild(subItem)
    document.head.appendChild(image)
  }
}

export default SinglePokemon