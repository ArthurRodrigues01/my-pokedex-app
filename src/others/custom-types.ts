interface PokedexEntry { 
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

interface Content {
  id: number,
  name: string,
  weight: number,
  height: number,
  types: string[],
  image: string,
  pokedex_entries: PokedexEntry[]
}

interface PKMNData { 
  types: string[], 
  id: number, 
  gen: number,
  weight: number, 
  height: number, 
  name: string, 
  sprite_src: string, 
  pokedex_entries: PokedexEntry[] 
}

export type { Content, PKMNData, PokedexEntry }