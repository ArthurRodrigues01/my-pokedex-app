import { useState } from 'react'
import styled from 'styled-components'
import { TypeImage, TypeSphere, getPokemonTypeColor, getPokemonWrapperBGColor } from './pokemonTypeSphereComponents'
import { SpriteSphere, SpriteImage } from './generalPokemonComponents'
import NoPokemonImageFound from './NoPokemonImageFound'
import { PokedexEntry, PokemonData } from '../types'
import { capitalize, rmFchars } from '../functions/other-functions'

const PokemonWrapper = styled.div<{ type: string }>`
  width: 800px;
  border-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${props => getPokemonWrapperBGColor(props.type)};
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
  background-color: ${props => getPokemonTypeColor(props.type)};

  width: 325px;
  height: 550px;
`
const PokemonTypeWrapper = styled.div`
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

function PokemonCard(props: PokemonData) {
  const [entry, setEntry] = useState(props.pokedex_entries[0] ? rmFchars(props.pokedex_entries[0].flavor_text) : 'No description available') 

  return (
    <PokemonWrapper type={props.types[0]}>
      <StatsWrapper type={props.types[0]}>
        <h2>{capitalize(props.name)} #{props.id}</h2>
        <SpriteSphere>
          {props.sprite_src ? <SpriteImage src={props.sprite_src}/> : <NoPokemonImageFound/>}
        </SpriteSphere>
        <h2>Gen: {props.gen}</h2>
        <h2>Weight: {props.weight}KG</h2>
        <h2>Height: {props.height}M</h2>
        <PokemonTypeWrapper>
          {props.types.map((type: string) => {
            return <TypeSphere type={type} key={type}><TypeImage src={`/assets/pokemon-types/${type}.svg`}/></TypeSphere>
          })}
        </PokemonTypeWrapper>
      </StatsWrapper>
      <FlexCol>
        <Description>{entry}</Description>
        <VersionSelectorWrapper>
          <VersionSelectorLabel>Version:</VersionSelectorLabel>
          <VersionSelector onChange={(e) => { setEntry(rmFchars(props.pokedex_entries.filter((elm: PokedexEntry) => elm.version.name == e.target.value)[0].flavor_text))}}>
            {props.pokedex_entries.map((pokedexEntry: PokedexEntry) => {
              return <option key={pokedexEntry.version.name} value={pokedexEntry.version.name}>{capitalize(pokedexEntry.version.name)}</option>
            })}
          </VersionSelector>
        </VersionSelectorWrapper>
      </FlexCol>
    </PokemonWrapper>
  )
}

export default PokemonCard