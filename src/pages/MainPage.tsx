import styled from "styled-components"
import { CenteredPage, Title, BigTitle, FlexRow, FlexCol} from "../components/generalComponents"
import PokemonPreviewCard from '../components/PokemonPreviewCard'
import usePreviewPokemons from "../hooks/usePreviewPokemons"
import useWindowScrollBottom from "../hooks/useWindowScrollBottom"


//https://pokeapi.co/api/v2/pokemon?limit=xxx&offset=xxx
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/xxx.png

const FlexPage = styled(FlexRow)`
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: calc(15%); 
    margin-right: calc(15%); 
`

function MainPage() {
  const { loading, pokemons_data, fetchNextPokemons, isFetchingMore } = usePreviewPokemons()

  useWindowScrollBottom(() => {
    if (!isFetchingMore) fetchNextPokemons()
  }, [fetchNextPokemons])
 
  if (loading) return 'Loading...'

  return (
    <CenteredPage>
      <FlexPage>
        { pokemons_data.map(pokemon_data => <PokemonPreviewCard key={pokemon_data.name} {...pokemon_data}/>)}  
      </FlexPage>
      { isFetchingMore && 'Carregando mais pokémons...' }  
    </CenteredPage>
  )
}

export default MainPage