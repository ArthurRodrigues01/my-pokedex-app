import { PokedexEntry } from '../types'

async function getPokemonData(id: number) {
  const a = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const b = await a.json()

  const b2 = await fetch(b.species.url)
  const c2 = await b2.json()
  const pokedexEntries = c2.flavor_text_entries.filter((entry: any) => entry.language.name == 'en')
  const MAX_NUMBER_OF_POKEMONS = await getMaxNumberOfPokemons()
  
  const c = {
    id: b.id as number,
    gen: getGen(b.id),
    name: b.species.name as string,
    weight: b.weight / 10, // ??? -> KG
    height: b.height /10, // Decimeters -> Meters
    types: b.types.map((item: any) => item.type.name) as string[],
    sprite_src: b.sprites.other["official-artwork"].front_default as string,
    pokedex_entries: pokedexEntries as PokedexEntry[],
    max_number_of_pokemons: MAX_NUMBER_OF_POKEMONS
  }

  return c
}

async function getMaxNumberOfPokemons() {
  const a = await fetch('https://pokeapi.co/api/v2/pokemon-species')
  const b = await a.json()
  const c = Number(b.count)

  return c
}

function getGen(id: number): number {
  if (id < 152) {
    return 1
  } else if (id < 252) {
    return 2
  } else if (id < 387) {
    return 3
  } else if (id < 494) {
    return 4
  } else if (id < 650) {
    return 5
  } else if (id < 722) {
    return 6
  } else if (id < 810) {
    return 7
  } else if (id < 906) {
    return 8
  } else {
    return 9
  }
}

export default getPokemonData
export { getPokemonData, getMaxNumberOfPokemons, getGen}