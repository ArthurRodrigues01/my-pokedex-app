import { replaceUselessCharacters } from "../functions/functions";

export const getDex = (offset, limit) => {
  const baseLink = 'https://pokeapi.co/api/v2/pokemon-species/';
  let apiLink;
  if (offset >= 0 && limit > 0) {
    const conditions = `?offset=${offset}&limit=${limit}`;
    apiLink = `${baseLink}${conditions}`;
  } else {
    apiLink = baseLink;
  }
  const req = fetch(apiLink).then(res => res.json()).then(data => data);
  
  return req;
};

export const getPokemonData = async (name) => {
  const nonRegularNames = {
    deoxys: 'deoxys-normal',
    giratina : 'giratina-altered',
    shaymin : 'shaymin-land',
    oricorio : 'oricorio-baile',
    lycanroc : 'lycanroc-midday',
    wishiwashi : 'wishiwashi-solo',
    eiscue : 'eiscue-ice',
    enamorus : 'enamorus-incarnate'
  };

  if (nonRegularNames[name] !== undefined) {
    name = nonRegularNames[name];
  };
  
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()).then(data => {
    return {
      id : data.id,
      types : data.types.map(item => item.type.name),
      sprite_link : data.sprites.other["official-artwork"].front_default,
      height : data.height / 10, // Decimeters => Meters
      weight : data.weight / 10, // Hectograms => Kilograms
      name : name
    };
  }).then(async data => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
    const data1 = await res.json();
    const description = data1.flavor_text_entries.find(item => item.language.name === 'en').flavor_text;
    return { ...data, description: replaceUselessCharacters(description, ['\n', '\f']) };
  });
};

/*
  pokemonData = {
    id : data.id,
    types : types.map(item => item.type.name),
    sprite_link : data.sprites.other["official-artwork"].front_default,
    height : data.height / 10, // Decimeters => Meters
    weight : data.weight / 10, // Hectograms => Kilograms
    name : name,
    description : description
  };
 */