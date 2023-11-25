export type PokedexEntry = {
  flavor_text: string,
  language: {
    name: string,
    url: string
  },
  version: {
    name: string,
    url: string
  }
}

export type PokemonPreviewData = { 
  name: string, 
  first_type: string, 
  sprite_src: string, 
  id: number 
}

export type PokemonData = { 
  name: string,
  gen: number,
  id: number, 
  height: number, 
  weight: number, 
  sprite_src: string,
  types: string[],
  pokedex_entries: PokedexEntry[],
  max_number_of_pokemons: number
}