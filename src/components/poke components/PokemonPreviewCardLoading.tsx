import styled from 'styled-components'
import { FlexCol, Title } from '../generalComponents'
import { SpriteSphere } from './generalPokemonComponents'
import LoadingFeedback from './LoadingFeedback'

function PokemonPreviewCardLoading({ refOb, name }: { refOb: any, name: string }) {
  return (
    <PokemonPreviewCardWrapper ref={refOb} gap={24}>
      <Title>{name}</Title>
      <SpriteSphere>
        <LoadingFeedback width={200} height={200}/>
      </SpriteSphere>
      <Title>Load</Title>
    </PokemonPreviewCardWrapper>
  )
}

const PokemonPreviewCardWrapper = styled(FlexCol)`
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: gray;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 3px solid #fff;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export default PokemonPreviewCardLoading