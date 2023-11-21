import { useCallback, useEffect, useRef, useState } from 'react'

const POKEMONS_PER_LINE = 3
const POKEMONS_PER_COLUMN = 16
const LIMIT = POKEMONS_PER_LINE * POKEMONS_PER_COLUMN


function useNextPokemons() {
  const [firstLoading, setFirstLoading] = useState(true)
  const isFetchingMore = useRef(false)
  const nextFetch = useRef('')
  const [pokemonsData, setPokemonsData] = useState<{name: string, url: string}[]>([])

  useEffect(() => {
    // first time loading page 
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=' + LIMIT)
    .then(res => res.json())
    .then(data => {
      nextFetch.current = data.next
      setPokemonsData(data.results)
      setFirstLoading(false)
    })
    
  }, [])

  const fetchNextPokemons = useCallback(() => {
    if (nextFetch.current == null) {
      console.log('acabou')     
    }

    isFetchingMore.current = true

    fetch(nextFetch.current)
    .then(res => res.json())
    .then(data => {
      nextFetch.current = data.next
      setPokemonsData([...pokemonsData, ...data.results])
      isFetchingMore.current = false
    })
  }, [nextFetch, pokemonsData])

  return { 
    loading: firstLoading, 
    pokemons_data: pokemonsData, 
    fetchNextPokemons, 
    isFetchingMore: isFetchingMore.current 
  } 
}

export default useNextPokemons