import styled from "styled-components"
import { splitArray } from "../functions/other-functions"
import { CenteredPage, FlexRow, CenteredFlexCol } from "../components/generalComponents"
import LoadingFeedback from "../components/LoadingFeedback"
import PokemonPreviewCard from '../components/PokemonPreviewCard'
import usePreviewPokemons from "../hooks/usePreviewPokemons"
import useWindowScrollBottom from "../hooks/useWindowScrollBottom"


//https://pokeapi.co/api/v2/pokemon?limit=xxx&offset=xxx
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/xxx.png

const CenteredMainPage = styled(CenteredPage)`
  padding-top: 5rem;
  margin-bottom:  5rem;
`

function MainPage() {
  const { loading, pokemons_data, fetchNextPokemons, isFetchingMore } = usePreviewPokemons()

  const NUMBER_OF_COLS = 3
  const NUMBER_OF_ROWS = pokemons_data.length / NUMBER_OF_COLS

  function showPokemons() { 
    
    const a = pokemons_data.map(pokemon_data => <PokemonPreviewCard key={pokemon_data.name} {...pokemon_data} />)
    const b = splitArray(a, NUMBER_OF_ROWS).map(row => <FlexRow gap={50}>{row}</FlexRow>)

    return b
  }

  useWindowScrollBottom(() => {
    if (!isFetchingMore) fetchNextPokemons()
  }, [fetchNextPokemons])

  if (loading) return 'Loading...'


  return (
    <CenteredMainPage>
      <CenteredFlexCol gap={50}>
        { showPokemons()}  
      </CenteredFlexCol>
      <LoadingFeedback>Carregando mais pokemons...</LoadingFeedback>
    </CenteredMainPage>
  )
}

export default MainPage