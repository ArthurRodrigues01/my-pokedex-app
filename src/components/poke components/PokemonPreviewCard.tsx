
import { PokemonPreviewData } from '../../types'
import { useState, useEffect, useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { FlexCol, Title, NoFeedbackAnchor } from '../generalComponents'
import { SpriteSphere, SpriteImage } from './generalPokemonComponents'
import PokemonPreviewCardLoading from './PokemonPreviewCardLoading'
import styled from 'styled-components'
import { getPokemonTypeColor } from './pokemonTypeSphereComponents'
import { capitalize } from '../../functions/other-functions'

function PokemonPreviewCard({ name, url }: { name: string, url: string }) {
  const ref = useRef(null)
  const { isVisible } = useOnScreen(ref)
  const  [pokemonPreviewData, setPokemonPreviewData] = useState<PokemonPreviewData>()

  useEffect(() => {
    //if pokemon card is visible on screen then fetch its data
    if (isVisible) {
      fetchPokemonPreviewData()
    }
  }, [isVisible])

  function fetchPokemonPreviewData() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setPokemonPreviewData({
        name: data.name,
        first_type: data.types[0].type.name,
        sprite_src: data.sprites.other['official-artwork'].front_default,
        id: data.id
      })
    })
  }

  // if pokemon preview data hasn't loaded yet, return feedback to user
  if (!pokemonPreviewData) return <PokemonPreviewCardLoading refOb={ref} name={capitalize(name)}/>

  return (
    <HoverableGrowthFeedback ref={ref} href={`./pokemon/${pokemonPreviewData.id}`}>
      <PokemonPreviewCardWrapper type={pokemonPreviewData.first_type} gap={24}>
        <Title>{capitalize(pokemonPreviewData.name)}</Title>
        <SpriteSphere>
          <SpriteImage src={pokemonPreviewData.sprite_src}/>
        </SpriteSphere>
        <Title>#{pokemonPreviewData.id}</Title>
      </PokemonPreviewCardWrapper>
    </HoverableGrowthFeedback>
  )
}

const PokemonPreviewCardWrapper = styled(FlexCol)<{ type: string }>`
  padding: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: ${props => getPokemonTypeColor(props.type)};
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  align-items: center;
  color: #fff;
`
const HoverableGrowthFeedback = styled(NoFeedbackAnchor)`
  transition: .5s;
  border-top-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border: 3px solid white;
  &: hover {
    z-index: 999;
    transform: scale(1.2);
  }
`

export default PokemonPreviewCard