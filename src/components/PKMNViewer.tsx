import { useState } from 'react'
import styled from 'styled-components'
import { TypeImage, TypeSphere, getPKMNTypeColor, getPKMNWrapperBGColor } from './pkmnTypeSphereComponents'
import { PokedexEntry, PKMNData } from '../others/custom-types'
import { capitalize, rmF } from '../functions/other-functions'

const PKMNWrapper = styled.div<{ type: string }>`
  width: 800px;
  border-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${props => getPKMNWrapperBGColor(props.type)};
  display: flex;
  flex-direction: row;
`
const StatsWrapper =  styled.div<{ type: string }>`
  display: flex;
  gap: 1rem;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-top-left-radius: 25px;
  background-color: ${props => getPKMNTypeColor(props.type)};

  width: 325px;
  height: 550px;
`
const SpriteSphere = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100000px;
  background-color: #ffe294;

  width: 250px;
  height: 250px;
`
const SpriteImage = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
`
const PKMNTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #eee;
  padding: 5px;
  border-radius: 10000px;
`
const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  font-weight: light;
  padding: 1.5rem;
  font-style: italic;
`
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
const VersionSelector = styled.select`
  padding: 8px;
  font-size: 1rem;
  border-radius: 10px;
  border: 0;
`
const VersionSelectorLabel = styled.h1`
  color: #fff;
  font-size: 1.75rem;
`
const VersionSelectorWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  left: 15px;
`

function PKMNViewer(props: PKMNData) {
  const [entry, setEntry] = useState(rmF(props.pokedex_entries[0].flavor_text)) 

  return (
    <PKMNWrapper type={props.types[0]}>
      <StatsWrapper type={props.types[0]}>
        <h2>{capitalize(props.name)}#{props.id}</h2>
        <SpriteSphere>
          <SpriteImage src={props.sprite_image_link}/>
        </SpriteSphere>
        <h2>Gen: {props.gen}</h2>
        <h2>Weight: {props.weight}KG</h2>
        <h2>Height: {props.height}M</h2>
        <PKMNTypeWrapper>
          {props.types.map((type: string) => {
            return <TypeSphere type={type} key={type}><TypeImage src={`/assets/pokemon-types/${type}.svg`}/></TypeSphere>
          })}
        </PKMNTypeWrapper>
      </StatsWrapper>
      <FlexCol>
        <Description>{entry}</Description>
        <VersionSelectorWrapper>
          <VersionSelectorLabel>Version:</VersionSelectorLabel>
          <VersionSelector onChange={(e) => { setEntry(rmF(props.pokedex_entries.filter((elm: PokedexEntry) => elm.version.name == e.target.value)[0].flavor_text))}}>
            {props.pokedex_entries.map((pokedexEntry: PokedexEntry) => {
              return <option key={pokedexEntry.version.name} value={pokedexEntry.version.name}>{capitalize(pokedexEntry.version.name)}</option>
            })}
          </VersionSelector>
        </VersionSelectorWrapper>
      </FlexCol>
    </PKMNWrapper>
  )
}

export default PKMNViewer