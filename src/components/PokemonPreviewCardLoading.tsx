import styled from 'styled-components'
import { FlexCol, Title, BigTitle } from './generalComponents'
import { SpriteImage, SpriteSphere } from './generalPokemonComponents'
import { getPokemonTypeColor } from './pokemonTypeSphereComponents'
import LoadingFeedback from './LoadingFeedback'

const PokemonPreviewCardWrapper = styled(FlexCol)`
  padding: 2rem;
  background-color: #d4d4d4;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  align-items: center;
  color: #fff;
`

function PokemonPreviewCardLoading({ refOb, name }: { refOb: any, name: string }) {
  return (
    <PokemonPreviewCardWrapper ref={refOb} gap={24}>
      <Title>{name}</Title>
      <SpriteSphere>
        <LoadingFeedback width={200} height={200}/>
      </SpriteSphere>
      <BigTitle>Load</BigTitle>
    </PokemonPreviewCardWrapper>
  )
}

export default PokemonPreviewCardLoading