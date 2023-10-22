import styled from 'styled-components'
import { CenteredPage, Title, BigTitle, FlexRow, FlexCol} from "../components/generalComponents"
import PKMNPreviewer from '../components/PKMNPreviewer'

function MainPage() {
  return (
    <CenteredPage>
      <FlexRow gap={24}>
        <PKMNPreviewer type='grass' name='Bulbasaur' id={1} sprite_src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'/>
        <PKMNPreviewer type='grass' name='Ivysaur' id={2} sprite_src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'/>
        <PKMNPreviewer type='grass' name='Venusaur' id={3} sprite_src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'/>
      </FlexRow>
    </CenteredPage>
  )
}

export default MainPage