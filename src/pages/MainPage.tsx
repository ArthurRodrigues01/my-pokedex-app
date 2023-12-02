import styled from "styled-components"
import { splitArray } from "../functions/other-functions"
import { CenteredPage, FlexRow, CenteredFlexCol } from "../components/generalComponents"
import LoadingFeedback from "../components/poke components/LoadingFeedback"
import PokemonPreviewCard from '../components/poke components/PokemonPreviewCard'
import usePreviewPokemons from "../hooks/usePreviewPokemons"
import useWindowScrollBottom from "../hooks/useWindowScrollBottom"


//https://pokeapi.co/api/v2/pokemon?limit=xxx&offset=xxx
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/xxx.png

function MainPage() {
  const { loading, pokemons_data, fetchNextPokemons, isFetchingMore } = usePreviewPokemons()

  const NUMBER_OF_COLS = 3
  const NUMBER_OF_ROWS = pokemons_data.length / NUMBER_OF_COLS

  function Pokemons() { 
    
    const a = pokemons_data.map(pokemon_data => <PokemonPreviewCard key={pokemon_data.name} {...pokemon_data} />)
    const b = splitArray(a, NUMBER_OF_ROWS).map((row, index) => <FlexRow key={`pokemon_${index}_wrapper`} gap={30}>{row}</FlexRow>)

    return (
      <>
        { b }
      </>
    )
  }

  useWindowScrollBottom(() => {
    if (!isFetchingMore) fetchNextPokemons()
  }, [fetchNextPokemons])

  if (loading) return 'Loading...'


  return (
    <CenteredMainPage>
      <CenteredFlexCol gap={30}>
        <Pokemons/>  
      </CenteredFlexCol>
      {/* <LoadingFeedback>Carregando mais pokemons...</LoadingFeedback> */}
    </CenteredMainPage>
  )
}

const CenteredMainPage = styled(CenteredPage)`
  padding-top: 5rem;
  margin-bottom:  5rem;
`

export default MainPage